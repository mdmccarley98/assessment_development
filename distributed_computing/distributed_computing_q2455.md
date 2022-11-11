# Distributed Computing 1: Docker Daemon Error

## Item ID
2455

## Claim
Claim 1

## Claim Behavior (evidence)
> If you don’t want to preface the docker command with sudo, create a Unix group called docker and add users to it. When the Docker daemon starts, it creates a Unix socket accessible by members of the docker group.
> https://docs.docker.com/engine/install/linux-postinstall/


## Content Target
- docker
- troubleshooting

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Your system administrator just installed docker and would like you to ensure it is configured correctly by running `docker info` with your user. You notice the error seen below. Choose the answer that will most likely fix this error.

## Code Snippet (optional)
```
user@host:~$ docker info
Client:
 Context:    default
 Debug Mode: false

Server:
ERROR: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.24/info: dial unix /var/run/docker.sock: connect: permission denied
```

## Answer Key
Ensure that your user was added to the `docker` group and re-login.

## Distractors
### 1.
The administrator needs to reinstall the docker application in a folder you have permissions to access.

### 2.
Have the administrator install the server, not just the client tools.

### 3.
Pull a docker image before checking on docker info.

## Common errors, misconceptions, or irrelevant information:
1. The user has permissions to run the docker command.
2. Docker is installed correctly.
3. You should see a response in the Server section despite the system lacking any images.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
