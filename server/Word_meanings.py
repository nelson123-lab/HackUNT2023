from PyDictionary import PyDictionary
from gtts import gTTS
import os
# Meaning of Word using dictionary1
# The text that you want to convert to audio
mytext = input('Enter word')
dictionary1 = PyDictionary()
# Finding Synonym using Dictionary1
print(dictionary1.meaning('Archive'))

"""
{'Noun': ['a depository containing historical records and documents'], 'Verb': ['put into an archive']}
"""
# Language in which you want to convert
language = 'en'
myobj = gTTS(text=mytext, lang=language, slow=False)
# Saving the converted audio in a mp3 file named
# welcome
myobj.save("welcome.mp3")
# Playing the converted file
os.system("mpg321 welcome.mp3")