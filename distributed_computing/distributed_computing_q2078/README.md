# Distributed Computing 3: Multistage


## Item ID
2078

## Claim

-   Claim: 3

## Threshold Probabilities
[0.10, 0.30, 0.50, 0.70]

## Claim Behavior (evidence)

https://docs.docker.com/develop/develop-images/multistage-build/

```bash
$ docker pull alpine
Using default tag: latest
latest: Pulling from library/alpine
Digest: sha256:69e70a79f2d41ab5d637de98c1e0b055206ba40a8145e7bddb55ccc04e13cf8f
Status: Image is up to date for alpine:latest
docker.io/library/alpine:latest
$ docker tag alpine one
$ docker tag alpine two
$ docker tag alpine three
$ docker build . -t example
Sending build context to Docker daemon  3.584kB
Step 1/8 : FROM one
 ---> 6dbb9cc54074
Step 2/8 : RUN mkdir f && echo "apple" > f/food.txt
 ---> Using cache
 ---> 9481e6d40fbf
Step 3/8 : FROM two
 ---> 6dbb9cc54074
Step 4/8 : RUN mkdir f && echo "pear" > f/food.txt
 ---> Using cache
 ---> e96211383655
Step 5/8 : FROM three
 ---> 6dbb9cc54074
Step 6/8 : RUN mkdir f && echo "orange" > f/food.txt
 ---> Using cache
 ---> 067fc744c802
Step 7/8 : COPY --from=0 f .
 ---> Using cache
 ---> 691218e21fd9
Step 8/8 : CMD ["cat", "food.txt"]
 ---> Using cache
 ---> 0c4701d756ab
Successfully built 0c4701d756ab
Successfully tagged example:latest
$ docker run --rm -it example
apple
```

## Content Target
Docker


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
The following is the contents of the Dockerfile for a container.

What is the output when this container is executed?


## Code Snippet (optional)
```
FROM one
RUN mkdir f && echo "apple" > f/food.txt
FROM two
RUN mkdir f && echo "pear" > f/food.txt
FROM three
RUN mkdir f && echo "orange" > f/food.txt
COPY --from=0 f .
CMD ["cat", "food.txt"]
```


## Answer Key
```
apple
```


## Distractors
### 1.
```
orange
```


### 2.
```
cat: food.txt: No such file or directory
```


### 3.
```
food.txt
```


## Common errors, misconceptions, or irrelevant information:
Multistage docker builds are important for security and image size.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

