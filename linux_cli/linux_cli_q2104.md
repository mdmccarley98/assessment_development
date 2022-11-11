# Linux CLI 2: SSH Tunneling

## Item ID
2104

## Claim
Claim 2

## Threshold Probabilities
[0.05, 0.20, 0.40, 0.60]

## Claim Behavior (evidence)
> In OpenSSH, local port forwarding is configured using the -L option:
>
>     ssh -L 80:intra.example.com:80 gw.example.com
>
> This example opens a connection to the gw.example.com jump server, and forwards any connection to port 80 on the local machine to port 80 on intra.example.com.
>
> -- https://www.ssh.com/academy/ssh/tunneling/example

## Content Target
Networking

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
What does the following command do?

## Code Snippet (optional)
```
ssh -L 8080:a.example.com:80 b.example.com
```

## Answer Key
* accepts any connection on the local computer port 8080
* forwards the connection through b.example.com
* sends the connection to a.example.com port 80 from b.example.com

## Distractors
### 1.
* accepts any connection on b.example.com port 8080
* forwards the connection through the local computer
* sends the connection to a.example.com port 80 from the local computer

### 2.
* accepts any connection on a.example.com port 8080
* forwards the connection through the local computer
* sends the connection to b.example.com port 80 from the local computer

### 3.
* accepts any connection on b.example.com port 8080
* forwards the connection through b.example.com
* sends the connection to a.example.com port 80 from b.example.com

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
