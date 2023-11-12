from pymongo import MongoClient

# Replace <connection_string> with your actual connection string
client = MongoClient("mongodb+srv://nelson123:<BD6tLMNkpkOkyUki>@cluster0.9khpcfr.mongodb.net/")

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

# Example usage
# add_word('example', 'a thing characteristic of its kind or illustrating a general rule')
# add_word('software', 'the programs and other operating information used by a computer')
# dictionary = get_dictionary()
# print(dictionary)
