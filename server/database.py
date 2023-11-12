from pymongo import MongoClient
from dotenv import load_dotenv
import os
# Replace <connection_string> with your actual connection string

load_dotenv()
url = os.getenv("API_KEY")
client = MongoClient(url)

# Access the database
db = client['mydictionary']

# Access the collection
collection = db['words']

# Function to add information to the database
def add_word(word, definition):
    collection.insert_one({'word': word, 'definition': definition})

# Function to retrieve information from the database as a dictionary
def get_dictionary():
    dictionary = {}
    for doc in collection.find():
        dictionary[doc['word']] = doc['definition']
    return dictionary

# add_word('example', 'a thing characteristic of its kind or illustrating a general rule')
# add_word('software', 'the programs and other operating information used by a computer')
# add_word('computer', 'A device for computaton and creative work.')
dictionary = get_dictionary()
# print(dictionary)
for key, value in dictionary.items():
    print(key, value)
