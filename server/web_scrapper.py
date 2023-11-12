import requests
from bs4 import BeautifulSoup

url = "https://medium.com/@johnidouglasmarangon/how-to-summarize-text-with-openai-and-langchain-e038fc922af"  # Replace with the URL of the website you want to extract text from
response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")

text_elements = soup.find_all("p")  # Replace "p" with the appropriate HTML tag for the text you want to extract

extracted_text = [element.get_text() for element in text_elements]

for text in extracted_text:
    print(text)
