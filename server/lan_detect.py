from langdetect import detect


    
text = "你好我是尼尔森"
language = detect(text)
print("Detected language:", language)

from langdetect.detector_factory import _factory

language_codes = _factory.langlist
print("Supported language codes:", language_codes)


import iso639

for code in language_codes:
    language_name = iso639.to_name(code)
    print(f"{code}: {language_name}")

# It fails to give chineese language abbreviations.
# zh-tw and zh-cn   are not supported.