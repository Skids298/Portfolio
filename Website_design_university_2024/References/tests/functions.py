import json
import os

def create_assistant(client):
    assistant_file_path = 'assistant.json'

    if os.path.exists(assistant_file_path):
        with open(assistant_file_path, 'r') as file:
            assistant_data = json.load(file)
            assistant_id = assistant_data['assistant_id']
    else:
        file = client.files.create(file=open("knowledge.docx", "rb"),
                                   purpose='assistants')
        
        assistant = client.beta.assistants.create(instructions="""
                    THe assistant, CRUnk""",
                    model="gpt-4-1106-preview",
                    tools=[{"type": "retrival"}],
                    file_ids=[file.id])
        
        with open(assistant_file_path, 'w') as file:
            json.dump({'assisant_id': assistant.id}, file)
            print("Created a new assistant and saved the ID.")

        assistant_id=assistant_id

        return assistant_id