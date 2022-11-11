# Distributed Computing 1: Docker Compose Troubleshooting

## Item ID
2462

## Claim
Claim 1

## Claim Behavior (evidence)
Run application code in this folder with `docker compose up`.

## Content Target
- Troubleshooting
- Docker

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You are tasked with deploying a small application behind nginx. When you launch the application with `docker compose up` and attempt to visit the webpage at `http://localhost:8080`, you receive a "502 Bad Gateway" error from nginx. What is causing this error?

## Code Snippet (optional)
The nginx config:
```javascript
server {
    listen 80;
    server_name localhost;
    location / {
        proxy_pass http://app:8081/;
        proxy_set_header Host "localhost";
    }
}
```

The docker-compose.yml:
```yaml
services:
  nginx:
    image: nginx:latest
    depends_on:
      - app
    volumes:
      - ./default.conf:/etc/nginx/conf.d/default.conf
    ports:
      - 8080:80

  app:
    build:
      context: .
      dockerfile: Dockerfile
    environment:
      - APP_PORT=80
```

The app.py:
```python
import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello from the application'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.environ['APP_PORT'])
```

## Answer Key
The APP_PORT environment variable should be set to `8081`

## Distractors
### 1.
The APP_PORT environment variable should be set to `8080`

### 2.
In the docker compose file, the `services.ngnix.ports` should be set to `8081:80`

### 3.
The webpage is only visible at `http://localhost:80`

## Common errors, misconceptions, or irrelevant information:
1. Close but the nginx server is sending app requests to 8081.
2. This would only modify communication to nginx not the application itself. A bad gateway means the web server cannot access the underlying app/services in this case the python application.
3. Since nginx is our webserver and is running externally at 8080 this is not correct.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
