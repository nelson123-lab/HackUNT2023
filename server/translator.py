from translate import Translator

def language_translation(text_to_translate, language):
    # Initialize the translator
    translator = Translator(to_lang = language)

    # Translate the text to the desired language (e.g., German)
    translated_text = translator.translate(text_to_translate)

    return translated_text
