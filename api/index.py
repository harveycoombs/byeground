from flask import Flask, request, jsonify

from lib.ai import remove_background

app = Flask(__name__)

@app.route("/api/remove", methods=["POST"])
def remove_background():
    if "image" not in request.files:
        return jsonify({ "error": "No image provided" }), 400
    
    image = request.files["image"]
    data = remove_background(image)

    return data, 200, {"Content-Type": "image/png"}