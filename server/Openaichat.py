# from dotenv import load_dotenv
# from langchain.text_splitter import CharacterTextSplitter
# from langchain.embeddings import OpenAIEmbeddings
# # FAISS runs locally saves the embeddings on the local machine.
# from langchain.vectorstores import FAISS
# from langchain.chat_models import ChatOpenAI
# from langchain.memory import ConversationBufferMemory
# from langchain.chains import ConversationalRetrievalChain
# from web_scrapper import webScrapper

# load_dotenv()
# # Function to return chunks of data from the extracted pdf data.
# def get_text_chunks(text):
#     text_splitter = CharacterTextSplitter(
#         separator="\n",
#         chunk_size = 1000,
#         chunk_overlap = 200,
#         length_function=len
#     )
#     chunks = text_splitter.split_text(text)
#     return chunks

# # Function to get vector data from the text chunks.
# def get_vectorstore(text_chunks):
#     embeddings = OpenAIEmbeddings()
#     vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
#     return vectorstore

# # Function for the conversation chain.
# def get_conversation_chain(vectorstore):
#     llm = ChatOpenAI()
#     memory = ConversationBufferMemory(
#         memory_key='chat_history', return_messages=True)
#     conversation_chain = ConversationalRetrievalChain.from_llm(
#         llm=llm,
#         retriever=vectorstore.as_retriever(),
#         memory=memory
#     )
#     return conversation_chain

# # To handle the user input and repsonse for continous chat.
# if __name__ == "__main__":
#     url = "https://medium.com/@johnidouglasmarangon/how-to-summarize-text-with-openai-and-langchain-e038fc922af"
#     raw_text = webScrapper(url)
#     text_chunks = get_text_chunks(raw_text)
#     vectorstore = get_vectorstore(text_chunks)
#     conversation = get_conversation_chain(vectorstore)

#     while True:
#         user_question = input("What do you wanna know from the website? (Enter 'stop' to end the chat): ")
#         if user_question.lower() == "stop":
#             break

#         response = conversation({'question': user_question})
#         chat_history = response['chat_history']

#         for i, message in enumerate(chat_history):
#             if i % 2 == 0:
#                 print("User: " + message.content)
#             else:
#                 print("Bot: " + message.content)
from dotenv import load_dotenv
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
# FAISS runs locally saves the embeddings on the local machine.
from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from web_scrapper import webScrapper
import requests
import openai
import os

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

# Function to return chunks of data from the extracted pdf data.
def get_text_chunks(text):
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )
    chunks = text_splitter.split_text(text)
    return chunks

# Function to get vector data from the text chunks.
def get_vectorstore(text_chunks):
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
    return vectorstore

# Function for the conversation chain.
def get_conversation_chain(vectorstore):
    llm = ChatOpenAI()
    memory = ConversationBufferMemory(
        memory_key='chat_history', return_messages=True)
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        memory=memory
    )
    return conversation_chain

# To handle the user input and response for continuous chat.
if __name__ == "__main__":
    url = "https://medium.com/@johnidouglasmarangon/how-to-summarize-text-with-openai-and-langchain-e038fc922af"
    raw_text = webScrapper(url)
    text_chunks = get_text_chunks(raw_text)
    vectorstore = get_vectorstore(text_chunks)
    conversation = get_conversation_chain(vectorstore)

    while True:
        user_question = input("What do you wanna know from the website? (Enter 'stop' to end the chat): ")
        if user_question.lower() == "stop":
            break

        response = conversation({'question': user_question})
        chat_history = response['chat_history']

        if len(chat_history) == 0:
            print("I am not able to find enough information from the website. Let me search for the answer...")
            
            # Make the normal API call here and get the response
            usermessages = {"question": user_question}  # Replace with the appropriate parameters for your API
            
            try:   
                # Assuming the API response is in JSON format, you can extract the relevant information
                response = openai.Completion.create(
                engine='text-davinci-003',  # Specify the language model to use
                prompt = usermessages,
                max_tokens=300,  # Set the maximum length of the response
                n=1,  # Specify the number of responses to generate
                stop=None)
                api_answer = response.choices[0].text.strip()
                print("Bot: " + api_answer)
                
                # Continue the chat with the API response
                response = conversation({'question': api_answer})
                chat_history = response['chat_history']
                
            except requests.exceptions.RequestException as e:
                print("Error occurred during the API call:", str(e))

        for i, message in enumerate(chat_history):
            if i % 2 == 0:
                print("User: " + message.content)
            else:
                print("Bot: " + message.content)