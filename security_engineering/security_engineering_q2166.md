# Security Engineering 4: Port Scanning


## Item ID
2166

## Claim
4


## Claim Behavior (evidence)
> A non-responsive port is usually filtered (blocked by a firewall device, or perhaps the host is down), but this one test is not conclusive.

> -- https://nmap.org/book/synscan.html#scan-methods-tbl-syn-scan-responses

> A closed port is accessible (it receives and responds to Nmap probe packets), but there is no application listening on it.
> -- https://nmap.org/book/man-port-scanning-basics.html


## Content Target
network security
tools


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem

While scanning ports on a server with nmap, you discover port 443 is "open" but you notice that other ports are responding with a status of "filtered".

What is the likely cause for the status "filtered" on this server?


## Code Snippet (optional)



## Answer Key
The server is behind a firewall.

## Distractors
### 1.
The server is down.


### 2.
The ports are closed.


### 3.
The ports do not have applications listening.


## Common errors, misconceptions, or irrelevant information:
1. Since we know the server itself is up and listening on port 443 distractor 1 cannot be true.

2. The ports are not closed since filtered is reported when there is no response or the response is an ICMP error.

3. If a port is accessible but no application is running it would be reported as closed.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

