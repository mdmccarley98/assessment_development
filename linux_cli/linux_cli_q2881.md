# Linux CLI - IPTABLES PORT FORWARD

## Item ID
2881

## Claim
2: network

## Target Skill Level
3

## Claim Behavior (evidence)

>Since you’re only configuring port forwarding and not performing NAT on every packet that hits your firewall, 
>you’ll want to match port 80 on your rule. You will match packets aimed at port 80 to your web server’s private IP address

https://www.digitalocean.com/community/tutorials/how-to-forward-ports-through-a-linux-gateway-with-iptables

## Content Target
Networking

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
A developer is testing an application inside a container in a Linux host, and while they can access it from within the host, external access is not working.
<br><br>
The developer requests your assistance to do a port forward from the Linux host into the container for the application to have external communication access.
<br><br>
Considering that the Linux host IP is 10.10.10.10, the container IP is 172.16.100.1, and the application port is TCP/443, which command will achieve this?

## Code Snippet (optional)

## Answer Key
`iptables -t nat -I PREROUTING -p tcp --dport 443 -j DNAT --to 172.16.100.1`

## Distractors
### 1.
`iptables -t nat -I POSTROUTING -p tcp --dport 443 -j DNAT --to 172.16.100.1`

### 2.
`iptables -I FORWARD -p tcp --dport 443 -j DNAT --to 172.16.100.1`

### 3.
`iptables -t nat -I INPUT -p tcp --dport 443 -j DNAT --to 172.16.100.1`

## Common errors, misconceptions, or irrelevant information:
PREROUTING table under the NAT chain is the only place where DNAT (Destination NAT or port forward) is available

1. DNAT is not available in POSTROUTING
2. FORWARD table cannot do NAT
3. INPUT table happens after routing check, thus the packet cannot be forwarded at this point

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
