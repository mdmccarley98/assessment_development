# Distributed Computing 1: k8s get services


## Item ID
2087

## Claim

-   Claim: 1



## Threshold Probabilities
[0.10, 0.30, 0.50, 0.75]

## Claim Behavior (evidence)

> One of the inconveniences of writing kubectl commands is that every time you write a command, you need the --namespace option at the end. People often forget this and end up creating objects (pods, services, deployments) in the wrong namespace. 
>
> -- https://www.ibm.com/cloud/blog/8-kubernetes-tips-and-tricks


## Content Target
* kubernetes
* k8s


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
A colleague is learning kubernetes.
They just ran the following commands:

```
~$ kubectl create deployment hi -n n --image=nginx
deployment.apps/hi created
~$ kubectl expose deployment hi -n n --type=NodePort --port=80
service/hi exposed
```

However when they run `kubectl get services`, the `hi` NodePort does NOT show up, why not?

```
~$ kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   170m
```


## Code Snippet (optional)



## Answer Key
The `hi` service is NOT in the default namespace.


## Distractors
### 1.
The `hi` app is a deployment, NOT a service.


### 2.
Port 80 is a privelaged port.


### 3.
The `hi` app exits immediately after it starts, which closes the service.


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

