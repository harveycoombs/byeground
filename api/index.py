from flask import Flask, request, jsonify
from flask_cors import CORS
import logging

from ai import remove_background

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route("/api/remove", methods=["POST"])
def handle_remove_background():
    try:
        if not request.files:
            return jsonify({ "error": "No image provided" }), 400

        file = request.files.get('file')
        if not file:
            return jsonify({ "error": "No file provided" }), 400
        
        logger.info(f"Received file: {file.filename}")
        
        file_data = file.read()
        logger.info(f"File size: {len(file_data)} bytes")
        
        data = remove_background(file_data)
        logger.info("Background removal completed successfully")
        
        return data, 200, {"Content-Type": "image/png"}
    except Exception as e:
        logger.error(f"Error in handle_remove_background: {str(e)}")
        return jsonify({ "error": str(e) }), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5328, debug=True)