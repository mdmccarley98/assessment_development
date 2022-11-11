# Distributed Computing 3: docker mount volume


## Item ID
2090

## Claim

-   Claim: 3

## Threshold Probabilities
[0.20, 0.50, 0.70, 0.80]

## Claim Behavior (evidence)

Running a container by name:

>
>     docker build -t getting-started .
>
> ...
>
>     docker run -dp 3000:3000 getting-started
>
> -- https://docs.docker.com/get-started/02_our_app/


Mount the current working directory:
>
>     $ docker  run  -v `pwd`:`pwd` -w `pwd` -i -t  ubuntu pwd
>
> The -v flag mounts the current working directory into the container.
>
> -- https://docs.docker.com/engine/reference/commandline/run/

## Content Target
docker


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
You checkout a repo with a `Dockerfile` in the root folder, and are currently in the root folder.
The README wants you to mirror the current directory with the `/usr/share/nginx/html` directory in the container.

Which of the following commands will run this repo in docker as described above?


## Code Snippet (optional)



## Answer Key
```
docker build -t app .
docker run -p 8000:80 -v $PWD:/usr/share/nginx/html app
```


## Distractors
### 1.
```
docker build -t app .
docker run --rm -it -p 8000:80 -v /usr/share/nginx/html app
```

### 2.
```
docker build .
docker run -p 8000:80 -v $PWD:/usr/share/nginx/html nginx
```


### 3.
```
docker build .
docker run --rm -it -p 8000:80 -v /usr/share/nginx/html nginx
```



## Common errors, misconceptions, or irrelevant information:

1. this builds and runs the correct app, and creates a persistent volume, but does not mirror the current directory
2. this builds the current app, mirrors the current directory correctly, but does then runs the `nginx:latest` app from docker hub instead of the local Dockerfile
3. this builds the current app, but then runs the `nginx:latest` app from docker hub instead of the local Dockerfile

The main issues to look out for are:
* `-v LOCAL:REMOTE` where local is the current directory (`$PWD`) and REMOTE is the directory inside the container.
* make sure you're running the correct image by tagging or naming with `-t` and then using that tag, it also works to use the image id from `docker images` if you haven't named it.

The `--rm -it` part is irrelevant.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

