# Linux CLI 2: Route Interface

## Item ID
2101

## Claim
Claim 2

## Threshold Probabilities
[0.05, 0.20, 0.40, 0.70]

## Claim Behavior (evidence)
> `ip route get`  
>               get a single route
>               this command gets a single route to a destination and
>               prints its contents exactly as the kernel sees it.  
> ...  
> Note that this operation is not equivalent to ip route
>               show.  show shows existing routes.  get resolves them and
>               creates new clones if necessary. Essentially, get is
>               equivalent to sending a packet along this path.  
>
> -- https://www.man7.org/linux/man-pages/man8/ip-route.8.html

> How's the routing table configured? So `netstat -rn`. Who uses `ip route get`? Hooray oh wow excellent.  So if you haven't used `ip route get` before it's fantastic.  You give it an ip route and it goes through the routing table for you and tells you what it would have done.  So you don't have to keep reading 152 and getting it confused with 125 and just a quick way to ask the kernel what it would have done.  What interface are you going to throw it out of?  
> -- https://youtu.be/zrr2nUln9Kk?t=841 (Linux Performance Tools, Brendan Gregg, Part 2 of 2)

## Content Target
Networking

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Which command will show you the interface used to reach an external address?

## Code Snippet (optional)

## Answer Key
```
ip route get 10.221.55.7
```

## Distractors
### 1.
```
traceroute 10.221.55.7
```

### 2.
```
dig 10.221.55.7
```

### 3.
```
route | grep 10.221.55.7
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
