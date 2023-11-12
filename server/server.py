from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv


app = Flask(__name__)
CORS(app)

@app.route("/members", methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/definition", methods=['POST'])
def definition():
    data = request.get_json()
    user_word = data.get('word')
    return jsonify({"response": "This is your word " + user_word})

if __name__ == "__main__":
    app.run(debug = True)