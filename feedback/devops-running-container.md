# DevOps Running Container

## Item ID
devops-running-container

## Claim
DevOps

## Claim Behavior (evidence)

* [Get a Shell to a Running Container](https://kubernetes.io/docs/tasks/debug-application-cluster/get-shell-running-container/) - kubernetes.io
* [docker container exec](https://docs-stage.docker.com/engine/reference/commandline/container_exec/) - docker.com

## Content Target
Kubernetes
Docker

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

One of the pods on your Kubernetes cluster is filling up it's disk with more than 20 gigabytes of something.  But a normal pod in this cluster uses less than 1 gigabyte of disk space.

For some other reason reason `kubectl` isn't able to connect to the pod, but you do have shell access to the VM running the bad pod.  So you log into the VM.

Now, how can you get a shell into the running container so you can examine what is taking so much space?


## Code Snippet (optional)


## Answer Key

* `docker exec -it container_name bash`


## Distractors

### 1.
* If `kubectl` can't access it, then it's no longer accessable.

### 2.
* Once a container is running, you can't create a new shell into that specific container instance.

### 3.
* `docker run --rm -it container_name bash`


## Common errors, misconceptions, or irrelevant information (optional):

Normally if `kubectl` works, you can just `kubectl exec -it pod_name /bin/bash` to get into the first container in the pod, and you shouldn't have to run `docker exec` yourself.

* `docker run` takes an image name to start a container, not an existing container name.  This will create a new container, and won't let you look inside a running container.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

