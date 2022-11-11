# Linux CLI 2: SSH CONNECTION RESET

## Item ID
2572

## Claim
Claim 2

## Target Skill Level
Level 3

## Threshold Probabilities
[0.30, 0.55, 0.70, 0.85]

## Claim Behavior (evidence)
>This article describes how to configure a restricted Secure Shell (SSH) login to a server from a particular IP address or hostname.
>To achieve this, use TCP Wrappers because they provide basic traffic filtering of incoming network traffic. Although more complex on the surface, TCP Wrappers essentially use of two files: /etc/hosts.allow and /etc/hosts.deny.

>https://docs.rackspace.com/support/how-to/restrict-ssh-login-to-a-specific-ip-or-host/

## Content Target
Networking

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
A freshly installed Linux server has its SSH login access restricted by IP addresses. This restriction has been done using the TCP Wrappers file at the OS level. The server IP is 172.16.20.100. The following changes have been done on the server:

```
>sudo touch /etc/hosts.{allow,deny}
>
>echo "sshd: ALL" > /etc/hosts.deny
>
>echo "sshd: 172.16.20.5" > /etc/host.allow
```

If the IP of your Linux computer is 172.16.20.1, what will you see upon trying to connect to the server using the following command?

```
>ssh 172.16.20.100
```

## Code Snippet (optional)

## Answer Key
`ssh_exchange_identification: read: Connection reset by peer`

## Distractors
### 1.
`ssh: connect to host 172.16.20.5 port 22: Connection timed out`

### 2.
`ssh: connect to host 172.16.20.5 port 22: Connection refused`

### 3.
`Unable to negotiate with 172.16.20.5 port 22: no matching key exchange method found.`

## Common errors, misconceptions, or irrelevant information:
Connection reset by peer means that a TCP connection was established but the network information was not valid for the SSH server, hence it sent a RESET back to the client.
1. Connection timeout happens when a TCP handshake could not be completed and no answer was received from the server.
2. Connection refused happens when the TCP port we are trying to connect to is not open on the server and the OS replies with a RESET without establishing a TCP handshake.
3. No matching key exchange method found is shown when the server has custom encryption ciphers other than default, since this is a fresh server this message is not relevant.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
