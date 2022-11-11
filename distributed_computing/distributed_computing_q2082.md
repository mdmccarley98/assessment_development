# Distributed Computing 1: Docker Exec


## Item ID
2082

## Claim

-   Claim: 1


## Threshold Probabilities
[0.10, 0.30, 0.50, 0.70]

## Claim Behavior (evidence)

> Next, execute an interactive bash shell on the container.
> 
>     $ docker exec -it ubuntu_bash bash
>
> This will create a new Bash session in the container ubuntu_bash.
> - https://docs.docker.com/engine/reference/commandline/exec/


## Content Target
docker


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem

There is an issue in production on a service running in docker on a single node.
You need to get into the container and change a file *now* manually, 
meanwhile the fix is already being built and will deploy in about a half hour.

When you run `docker ps` on the production VM, the following information is printed:
```
CONTAINER ID   IMAGE      COMMAND                  CREATED              STATUS              PORTS                  NAMES
3f2f6d24fd52   spof_app   "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:8000->80/tcp   kind_margulis
```

Which command will get you a shell inside the running container so you can edit the file in the container?


## Code Snippet (optional)



## Answer Key
```
docker exec -it kind_margulis /bin/sh
```


## Distractors
### 1.
```
docker exec -it spof_app /bin/sh
```

### 2.
```
docker run -it spof_app /bin/sh
```


### 3.
```
docker run -it kind_margulis /bin/sh
```


## Common errors, misconceptions, or irrelevant information:
1. this will look for a container named `spof_app` but that is the image name, not the container name
2. this will start a new container but not get into the current container
3. this will not start a container, unless someone uploaded one called `kind_margulis` to docker hub


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

