# Security Engineering 5: Error Handling


## Item ID
2181

## Claim
5


## Claim Behavior (evidence)
> Improper handling of errors can introduce a variety of security problems for a web site. The most common problem is when detailed internal error messages such as stack traces, database dumps, and error codes are displayed to the user (hacker).
> When errors occur, the site should respond with a specifically designed result that is helpful to the user without revealing unnecessary internal details.
> -- https://owasp.org/www-community/Improper_Error_Handling

To test the example code provided, install flask:

`pip install flask`

Then run `python3 error-handling.py`.

Test a successful fake login: `curl http://127.0.0.1:5000/\?username\=user\&password\=pass`

Test that reveals the site has poor exception handling: `curl http://127.0.0.1:5000/\?username\=notauser\&password\=pass`


## Content Target
secure coding


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem

Please review the code below.

What is the most likely security issue with this code?

## Code Snippet (optional)

```python
import flask
#...snip...

@app.route("/")
def create_session():
    try:
        if authenticate_user(**request.args):
            return display_dashboard(new_session_token())
    except Exception as e:
        raise Exception("User Login Has Failed") from e
    abort(401)
```


## Answer Key

Errors are not handled correctly.

## Distractors
### 1.

Session Token is not handled correctly.

### 2.

The code is vulnerable to SQL Injection.

### 3.

The user does not need a password.

## Common errors, misconceptions, or irrelevant information:

1. The code shown does not suggest this.
2. User input is passed to another function which could be handling input validation.
3. The user is being authenticated.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)



