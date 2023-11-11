# Text to speech.
# Import the required module for text
# to speech conversion
from gtts import gTTS



import os

# The text that you want to convert to audio
mytext = "Hallo, wie geht's dir?"

# Language in which you want to convert
language = 'de'

# Passing the text and language to the engine,
# here we have marked slow=False. Which tells

# have a high speed
myobj = gTTS(text=mytext, lang=language, slow=False)

# Saving the converted audio in a mp3 file named
# welcome
myobj.save("welcome.mp3")

# Playing the converted file
os.system("mpg321 welcome.mp3")
