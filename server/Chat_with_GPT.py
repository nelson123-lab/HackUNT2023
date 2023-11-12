from dotenv import load_dotenv
import openai
import os

load_dotenv()

class ChatApp:
    def __init__(self):
        # Setting the API key to use the OpenAI API
        openai.api_key = os.getenv("OPENAI_API_KEY")
        self.messages = [
            {"role": "system", "content": "You are a coding tutor bot to help user write and optimize python code."},
        ]

    def chat(self, message):
        self.messages.append({"role": "user", "content": message})
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=self.messages
        )
        self.messages.append({"role": "assistant", "content": response["choices"][0]["message"].content})
        return response["choices"][0]["message"]
    
chat_app = ChatApp()

# Start the conversation
while True:
    user_input = input("User: ")
    if user_input.lower() == "stop":
        break
    assistant_response = chat_app.chat(user_input)
    print("Assistant:", assistant_response['content'])
