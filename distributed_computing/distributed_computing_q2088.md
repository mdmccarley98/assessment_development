# Distributed Computing 3: k8s nodeSelector


## Item ID
2088

## Claim

-   Claim: 3

## Threshold Probabilities
[0.10, 0.30, 0.50, 0.70]

## Claim Behavior (evidence)
> You can constrain a Pod so that it can only run on particular set of Node(s). There are several ways to do this and the recommended approaches all use label selectors to facilitate the selection. 
>
> Step One: attach label to the node  
> ...  
> Step Two: Add a nodeSelector field to your pod configuration  
> ...  
> 
https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/


## Content Target
* kubernetes
* k8s


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
You are administering a kubernetes cluster with a single node:
```
kubectl get nodes --show-labels
NAME       STATUS   ROLES                  AGE   VERSION   LABELS
example    Ready    control-plane,master   62m   v1.20.2   arch=amd64,os=linux
```

You apply the following pod config `example.yml`
```yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    env: test
spec:
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
  nodeSelector:
    disktype: ssd
```

However when you run `kubectl get pods` it's status stays as "Pending" forever.

```
$ kubectl get pods
NAME    READY   STATUS    RESTARTS   AGE
nginx   0/1     Pending   0          12s
```

Why is it pending?


## Code Snippet (optional)



## Answer Key
None of the nodes satisfy the constraints of the node selector.


## Distractors
### 1.
The `example` node needs the `env=test` label.


### 2.
The pod needs to be started with: `kubectl run nginx`


### 3.
The pod needs to be patched in: `kubectl patch --patch-file example.yml`


## Common errors, misconceptions, or irrelevant information:

1. The nodeSelector: doesn't specify `env: test` as the required label.
2. If this were the right syntax, this would start a new pod, not start the one configured in the file.
3. This is not how to use the patch command.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

