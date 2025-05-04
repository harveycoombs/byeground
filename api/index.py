from flask import Flask, request, jsonify
from flask_cors import CORS

from ai import remove_background

app = Flask(__name__)
CORS(app)

@app.route("/api/remove", methods=["POST"])
def handle_remove_background():
    try:
        if not request.files:
            return jsonify({ "error": "No image provided" }), 400

        file = request.files.get('file')
        if not file:
            return jsonify({ "error": "No file provided" }), 400
        
        file_data = file.read()
        data = remove_background(file_data)

        return data, 200, {"Content-Type": "image/png"}
    except Exception as e:
        return jsonify({ "error": str(e) }), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5328, debug=True)