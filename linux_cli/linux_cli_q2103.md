# Linux CLI 2: IP troubleshooting

## Item ID
2103

## Claim
Claim 2

## Threshold Probabilities
[0.05, 0.20, 0.40, 0.70]

## Claim Behavior (evidence)
> 2. Bringing interfaces up/down
> 
> Two methods can be used to bring interfaces up or down.
> 2.1. Using "ip"
> 
> Usage:
> 
>     # ip link set dev <interface> up
>     # ip link set dev <interface> down
>
> -- https://tldp.org/HOWTO/Linux+IPv6-HOWTO/ch05s02.html

## Content Target
- Networking
- Troubleshooting

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
You are troubleshooting connectivity on a machine. The user can access the Internet fine as normal, but not a system on a VPN at 192.168.2.2. It worked before but for some reason it doesn't work right now. The user provides the following information about the system:

```
$ sudo ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp0s5: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 00:1c:42:b2:ef:68 brd ff:ff:ff:ff:ff:ff
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default 
    link/ether 02:42:19:82:ae:0f brd ff:ff:ff:ff:ff:ff
4: wg0: <POINTOPOINT,NOARP> mtu 1420 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000
    link/none 
$ sudo ifconfig
docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        ether 02:42:19:82:ae:0f  txqueuelen 0  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

enp0s5: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.211.55.6  netmask 255.255.255.0  broadcast 10.211.55.255
        inet6 fdb2:2c26:f4e4:0:4e93:22d4:2cca:2111  prefixlen 64  scopeid 0x0<global>
        inet6 fdb2:2c26:f4e4:0:a96d:4be1:8e75:a1f0  prefixlen 64  scopeid 0x0<global>
        inet6 fe80::438b:65f0:4c34:737d  prefixlen 64  scopeid 0x20<link>
        ether 00:1c:42:b2:ef:68  txqueuelen 1000  (Ethernet)
        RX packets 137278  bytes 202705582 (202.7 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 42707  bytes 2495244 (2.4 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 614  bytes 57691 (57.6 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 614  bytes 57691 (57.6 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

```

Which of the following commands is likely to fix the issue?

## Code Snippet (optional)

## Answer Key
```
# ip link set wg0 up
```

## Distractors
### 1.
```
# ip route add default via 192.168.2.2 dev enp0s5
```

### 2.
```
# echo "nameserver 192.168.2.2" > /etc/resolv.conf
```

### 3.
```
# ip link set dev enp0s5 address 192.168.2.2
```

## Common errors, misconceptions, or irrelevant information:
A. the `wg0` link is configured, but "DOWN" so you could try to set it UP
1. this will send all traffic through the machine you can't access
2. this will set the machine you can't access as a DNS server
3. this will change your address to the machine you can't access, and confuse everyone

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
