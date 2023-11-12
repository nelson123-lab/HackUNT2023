from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/members", methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


@app.route("/getdef", methods=['POST'])
def getdef():
    return

if __name__ == "__main__":
    app.run(debug = True)