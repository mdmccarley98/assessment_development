# Distributed Computing 1: k8s delete file


## Item ID
2089

## Claim

-   Claim: 1


## Threshold Probabilities
[0.10, 0.30, 0.50, 0.70]


## Claim Behavior (evidence)
```
$ minikube start
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
$ kubectl create job j --image=alpine -- /usr/bin/env
job.batch/j created
$ kubectl run alpine --image=alpine --restart=Never
pod/alpine created
$ kubectl get pods -o yaml > example.yml
$ kubectl run nginx --image=nginx
pod/nginx created
$ kubectl get pods
NAME      READY   STATUS      RESTARTS   AGE
alpine    0/1     Completed   0          36s
j-2dgvt   0/1     Completed   0          44s
nginx     1/1     Running     0          15s
$ kubectl delete -f example.yml
pod "alpine" deleted
pod "j-2dgvt" deleted
$ kubectl get pods
NAME    READY   STATUS    RESTARTS   AGE
nginx   1/1     Running   0          34s
$ 
```


## Content Target
* kubernetes
* k8s


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
On an empty kubernetes cluster you run the following commands.
```
kubectl create job j --image=alpine -- /usr/bin/env
kubectl run alpine --image=alpine --restart=Never
kubectl get pods -o yaml > example.yml
kubectl run nginx --image=nginx
kubectl delete -f example.yml
```

Which pods were deleted?


## Code Snippet (optional)


## Answer Key
* the `alpine` pod
* the pod created by the job `j`


## Distractors
### 1.
* the `alpine` pod


### 2.
* the pod created by the job `j`


### 3.
* the `alpine` pod
* the pod created by the job `j`
* the `nginx` pod


## Common errors, misconceptions, or irrelevant information:
This is under claim 5, because claim 4 says they stumble over complex archetecture.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

