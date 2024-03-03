from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

from keys import key
# from image_generation import GenerateImage

app = Flask(__name__)
CORS(app)


@app.route('/v1/images/generations')
def dfs():
  # call our image generation code
  # GenerateImage(request.json.iamge)
  return "hji this server is runnign jsut fine"

@app.route('/cgpt', methods=["POST"])
def index():
  r = requests.post('https://api.openai.com/v1/chat/completions', headers={'Authorization': 'Bearer ' + key}, json=request.get_json())
  return jsonify(r.json())


@app.route('/v1/chat/completions')
def home():
  # call our image generation code
  return "hji this server is runnign jsut fine"

