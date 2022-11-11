# Linux CLI 2: SSH CONNECTION HANGS

## Item ID
2573

## Claim
Claim 2

## Target Skill Level
Level 4

## Threshold Probabilities
[0.20, 0.35, 0.75, 0.90]

## Claim Behavior (evidence)
>UseDNS
>
>Specifies whether sshd(8) should look up the remote host name and check that the resolved host name for the remote IP address maps back to the very same IP address. The default is ''yes''.

>https://linux.die.net/man/5/sshd_config

## Content Target
Networking

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
A Linux server that you administer has been on a constant DDoS attack. This Linux server is hosting multiple websites on different public IPs. The server load goes up, making the server slow and hanging on every request. The network team informs you that the attack is coming from subnet 203.0.113.0/24, and you proceed to run the following command on the server:

```
>iptables -I INPUT -s 203.0.113.0/24 -j DROP
```

After running that command, you confirm that the DDoS attack is stopped, and every system metric went back to normal. However, you still notice that SSH login hangs and takes precisely 20 seconds to get a prompt. Why would this be?

## Code Snippet (optional)

## Answer Key
The DNS servers in /etc/resolv.conf are in the 203.0.113.0/24 subnet

## Distractors
### 1.
The DDoS attack is now happening on SSH port 22

### 2.
The system suffered post-mortem degradation

### 3.
Your computer IP is 203.0.113.15, and your packets are being dropped and retried since SSH uses TCP

## Common errors, misconceptions, or irrelevant information:
The DNS servers in /etc/resolv.conf file are indeed pointing in that subnet range, and since SSHd service tries to reverse lookup every IP that connects by default, it now hangs 20 seconds because the DNS reply is being dropped.
1. Since every system metric went back to normal, this attack is not happening anymore otherwise we would see an increase in CPU and network metrics.
2. SSH service does not exhibit degradation when system metrics are normal.
3. Since the SSH login succeeds after 20 seconds, this means that a connection was established, a DROP would not make that possible.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
