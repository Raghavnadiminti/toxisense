from flask import Flask, request, jsonify
import requests
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # This will allow all origins by default

# Perspective API Configuration
PERSPECTIVE_API_KEY = "AIzaSyD1OWTbfgy6tOlRMVn3mhmwh-MnbzE8H6s"  # Replace with your actual API key
PERSPECTIVE_API_URL = "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze"

@app.route("/analyze-text", methods=["POST"])
def analyze_text():
    data = request.json
    text = data.get("text")

    if not text:
        return jsonify({"error": "Text is required"}), 400

    try:
        # Analyze the content using Perspective API
        payload = {
            "comment": {"text": text},
            "languages": ["en"],
            "requestedAttributes": {"TOXICITY": {}},
        }
        api_response = requests.post(
            f"{PERSPECTIVE_API_URL}?key={PERSPECTIVE_API_KEY}", json=payload
        )
        api_data = api_response.json()

        # Extract toxicity score
        toxicity_score = api_data["attributeScores"]["TOXICITY"]["summaryScore"]["value"]
        return jsonify({"toxicityScore": toxicity_score})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
