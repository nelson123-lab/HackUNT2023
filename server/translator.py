from googletrans import Translator

# Initialize the translator
translator = Translator()

# Define the text you want to translate
text_to_translate = "Hello, how are you?"

# Translate the text to the desired language (e.g., German)
translated_text = translator.translate(text_to_translate, dest='de')

# Print the translated text
print(translated_text.text)
