from PyDictionary import PyDictionary
from gtts import gTTS

def word_meaning(word, Language = 'en'):
    dictionary1 = PyDictionary()

    # Finding Synonym using Dictionary1
    word_meaning = dictionary1.meaning(word)

    # myobj = gTTS(text = word, lang = Language, slow=False)
    # myobj.save("pronounciation.mp3")
    values = list(*word_meaning.values())
    return values[0]

print(word_meaning("Attractive"))