# Linux CLI 2: MAC address

## Item ID
2115

## Claim
Claim 2

## Threshold Probabilities
[0.10, 0.30, 0.60, 0.80]

## Claim Behavior (evidence)
```
$ ifconfig enp0s5 | grep ether
        ether 00:1c:42:b2:ef:68  txqueuelen 1000  (Ethernet)
$ ifconfig | grep MAC
$ ip address show | grep link
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    link/ether 00:1c:42:b2:ef:68 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::438b:65f0:4c34:737d/64 scope link noprefixroute
$ cat /proc/net/dev | grep enp0s5
enp0s5: 11881540   10233    0    0    0     0          0         0   593791    5886    0    0    0     0       0          0
$ 
```

## Content Target
Networking

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Which of the following commands will print the MAC address for only interface `en0`?

## Code Snippet (optional)

## Answer Key
```
ifconfig en0 | grep ether
```

## Distractors
### 1.
```
ifconfig | grep MAC
```

### 2.
```
ip address show | grep link
```

### 3.
```
cat /proc/net/dev | grep en0
```

## Common errors, misconceptions, or irrelevant information:
1. the ifconfig command does not print "MAC" on Ubuntu 20.04 or MacOS 10.15.7, if it did, then this command would not only show en0, but all the other interfaces too
2. `ip address show` will print all the MAC addresses, not just en0
3. `/proc/net/dev` displays statistics for each interface, but not the MAC address

The key to this, is knowing that `ifconfig en0` shows only the information for interface `en0`.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
