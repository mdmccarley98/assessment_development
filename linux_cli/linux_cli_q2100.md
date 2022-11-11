# Linux CLI 2: tcpdump -d

## Item ID
2100

## Claim
Claim 2

## Threshold Probabilities
[0.05, 0.20, 0.35, 0.50]

## Claim Behavior (evidence)
> -d	Dump the compiled packet-matching code in a human readable form to standard output and stop.
>
> -- https://man.openbsd.org/tcpdump

> If you run tcpdump and give it an expression, and give it minus d it will print out this instruction set.  That's BPF.  
> ...
> There's this in-kernel virtual machine that has it's own instruction set, and it's used by tcpdump. eBPF enhances that virtual machine.  
>
> -- https://youtu.be/bj3qdEDbCD4?t=728

## Content Target
Networking

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The following command prints out some information:
```
# tcpdump host 127.0.0.1 and port 80 -d
(000) ldh      [12]
(001) jeq      #0x800           jt 2	jf 18
(002) ld       [26]
(003) jeq      #0x7f000001      jt 6	jf 4
(004) ld       [30]
(005) jeq      #0x7f000001      jt 6	jf 18
(006) ldb      [23]
(007) jeq      #0x84            jt 10	jf 8
(008) jeq      #0x6             jt 10	jf 9
(009) jeq      #0x11            jt 10	jf 18
(010) ldh      [20]
(011) jset     #0x1fff          jt 18	jf 12
(012) ldxb     4*([14]&0xf)
```

What is this?

## Code Snippet (optional)

## Answer Key
BPF virtual machine code.

## Distractors
### 1.
Debugging Intel assembler on the process calling `listen()` on port 80.

### 2.
Routing table instructions.

### 3.
Raw traffic on port 80 of the local machine.

## Common errors, misconceptions, or irrelevant information:
eBPF is a very powerful technology in Linux since kernel 4.0 that allows running tracing code in the kernel safely. This technology is built off of BPF, and is used in modern performance analysis for large scale linux systems.

Microsoft is even getting eBPF to work in the Windows Kernel, because of how revolutionary it is.
https://cloudblogs.microsoft.com/opensource/2021/05/10/making-ebpf-work-on-windows/

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
