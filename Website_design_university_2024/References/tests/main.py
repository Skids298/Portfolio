import os
from time import sleep 
from packaging import version
from flask import Flask, request, jsonify
import openai 
from openai import OpenAI
import Website_design_university_2024.References.tests.functions as functions

#check openAO version is corrext
required_version = version.parse("1.1.1")
current_version = version.parse(openai.__version__)
OPENAI_API_KEY = os.environ['OPENAI_API_KEY']
if current_version < required_version:
    raise ValueError(f"Error: OPENAI versio {openai.__version__}"
                     "is less than the required version 1.1.1")
else: print("OPENAI version is compatible.")

#start flask app
app = Flask(__name__)

#init client
client = OpenAI(
    api_key=OPENAI_API_KEY)

#create new assistant or load existing
assistent_id = functions.create_assistant(client)

#start conversation thread
@app.route('/start', methods=['GET'])
def start_conversation():
    print("starting a new conversation...")  #debugging line
    thread = client.beta.threads.create()
    print(f"New thread created with ID: {thread.id}")
    return jsonify({"thread_id": thread.id})

#generate response
@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    thread_id = data.get('thread_id')
    user_input = data.get('message', '')

    if not thread_id:
        print("Error: MIssing thread_id")
        return jsonify({"error": "Missing thread-id"}), 400
    
    print(f"Recieved message: {user_input} for thread ID: {thread_id}")

    #add the user's message to the thread
    client.beta.threads.runs.create(thread_id=thread_id,
                                    assistent_id=assistent_id)
    
    #check if the Run requires action(function call)
    while True:
        run_status = client.beta.threads.runs.retrieve(thread_id=thread_id,
                                                       run_id=run.id)
        
        print(f"Run status: {run_status.status}")
        if run_status.status == 'completed':
            break
        sleep(1) #wait for a second before checking again

    #retrieve and run the latest message from the assistant
    messages = client.beta.threads.messages.list(thread_id=thread_id)
    response = messages.data[0].content[0].text.value

    print(f"Assistant response: {response}")
    return jsonify({"response":response})

#run server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
