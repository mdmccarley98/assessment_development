# Python Libraries flask

## Item ID
1321

## Claim

Claim 5

## Claim Behavior (evidence)

* [Syntax of basic Flask route](https://flask.palletsprojects.com/en/1.1.x/).
* [Flask Request](https://flask.palletsprojects.com/en/1.1.x/api/#flask.Request.json)

## Content Target
`flask`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem

What will the website return if a `POST` request is made with the JSON data below to the `/info` page?

## Code Snippet (optional)

Request Body:
```json
{
    "name": "Flask"
}
```

Website Code:
```python
from flask import Flask, request


app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():
    return "Hello World!"


@app.route("/info", methods=["GET", "POST"])
def info():
    if request.method == "GET":
        return "Here is some information."
    else:
        name = request.get_json(force=True).get("name")
        return f"Hello {name}!"

if __name__ == "__main__":
    app.run()
```

## Answer Key

"Hello Flask!"

## Distractors
### 1.
"Flask"

### 2.
"Here is some information."

### 3.
None.

## Common errors, misconceptions, or irrelevant information (optional)

* `get_json(force=True)` makes sure the post body is parsed as JSON even if the client doesn't send it as `Content-Type: application/json`
* `curl -d '{"name":"Flask"}' http://127.0.0.1:5000/info`

## Content Review

- Accuracy: 👎
    * fixed error in snippet `NameError: name 'requests' is not defined`
        * changed `requests` to `request`
        * changed `requests.args["name"]` to `request.json["name"]`
            * still doesn't work in unless mime type is sent
            * `request.get_json(force=True).get("name")`
- Alignment: ✅

* fixed `<code>` formatting to ` ```python `
* tested with Flask==1.1.2
