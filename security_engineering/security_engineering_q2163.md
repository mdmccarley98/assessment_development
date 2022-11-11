# Security Engineering 3: NMAP


## Item ID
2163

## Claim
3


## Claim Behavior (evidence)
> -sV: Probe open ports to determine service/version info
>
> -- https://nmap.org/book/man-briefoptions.html

## Content Target
tools


## Cognitive Model
Use



## Item Type
Multiple Choice

## Stem

The security team needs to run an nmap scan on a server to ensure services are using the latest software. The services you are interested in are Nginx (Web Server) and SSH.

Which nmap command is best suited for this?

## Code Snippet (optional)


## Answer Key

`nmap -sV -p 80,443,22 $SERVER_IP`


## Distractors
### 1.

`nmap -sV -sU -p 80,443,22 -O $SERVER_IP`


### 2.

`nmap -sV -sX --top-ports 100 $SERVER_IP`


### 3.

`nmap -v -sX -p 80,443,22 $SERVER_IP`


## Common errors, misconceptions, or irrelevant information:

1. -sU will only scan UDP so this will not work when scanning for web services and SSH.
2. -sX is not needed in this case and using --top-ports 100 scans more ports than is needed.
3. -sX is not needed in this case and using -v will only increase the verbosity of the output. It will not return service version.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
