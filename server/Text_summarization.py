from langchain.llms.openai import OpenAI
from dotenv import load_dotenv
# from langchain.docstore.document import Document
from langchain.chains.summarize import load_summarize_chain

llm = OpenAI(temperature=0, openai_api_key="YOUR_API_KEY")

load_dotenv()
texts = """
In Natural Language Processing — NLP — text summarization is the process of taking large documents and producing shorter versions of those documents while still preserving their meaning.

It can help people to quickly and easily understand the main points of documents. Moreover, this task can be integrated with existing systems as an intermediate stage to reduce the length of text documents.

There are two main approaches to text summarzation:

Extractive summarization: Extract the most important sentences from the original text based on a score function and join the results. Is works like copy-and-paste.
Abstractive summarization: Generate a new text based on an interpretation of the original text using advanced NLP techiniques. It works like a human-written abstract.
"""
# docs = [Document(page_content=text) for text in texts]

chain = load_summarize_chain(llm, chain_type="stuff")
summary = chain.run(texts)

