import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello from the application'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.environ['APP_PORT'])
