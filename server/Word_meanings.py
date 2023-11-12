from PyDictionary import PyDictionary
from gtts import gTTS

def meaning_pronounciation(word, Language = 'en'):
    dictionary1 = PyDictionary()

    # Finding Synonym using Dictionary1
    word_meaning = dictionary1.meaning(word)['Noun'][0] 

    myobj = gTTS(text = word, lang = Language, slow=False)
    myobj.save("pronounciation.mp3")
    return word_meaning