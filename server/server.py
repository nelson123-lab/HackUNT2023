from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from Text_summarization import Summarization
from Word_meanings import word_meaning
from translator import language_translation

app = Flask(__name__)
CORS(app)

@app.route("/members", methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/definition", methods=['POST'])
def definition():
    data = request.get_json()
    user_word = data.get('word')
    return jsonify({"response": "This is your word " + word_meaning(user_word)}) #return the summarize function here

@app.route("/summarize", methods=['POST'])
def summarize():
    data = request.get_json()
    para = data.get('text')
    return jsonify({"response": Summarization(para)}) #return the summarize function here.

@app.route("/translate", methods=['POST'])
def translate():
    data = request.get_json()
    para = data.get('text')
    return jsonify({"response": Summarization(para)}) #return the summarize function here.

if __name__ == "__main__":
    app.run(debug = True)