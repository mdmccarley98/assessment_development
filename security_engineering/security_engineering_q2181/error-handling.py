from random import randint
from json import dumps
from flask import abort, Flask, request

app = Flask(__name__)

# Fake data store
fake_db = {
    "user": "pass"
}

@app.route("/")
def create_session():
    try:
        if authenticate_user(**request.args):
            return display_dashboard(new_session_token())
    except Exception as e:
        raise Exception("User Login Has Failed") from e
    abort(401)

# Prints json with fake session token
def display_dashboard(token):
    return dumps({ "session": token })

# Generates fake session token
def new_session_token():
    return randint(100,999)

# Authenticates user against fake data store
def authenticate_user(username=None, password=None):
    return fake_db[username] == password


if __name__ == "__main__":
    app.run(debug=True)
