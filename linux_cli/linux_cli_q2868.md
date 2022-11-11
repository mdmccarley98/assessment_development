# Linux CLI - Networking Commands

## Item ID
2868

## Claim
Claim 2

Threshold Probabilities

## Claim Behavior (evidence)
> Multiple commands will display the routing table. Some will be deprecated soon but are still widely used on current deployments.

- ip (https://linux.die.net/man/8/ip)
- route (https://linux.die.net/man/8/route)
- netstat (https://linux.die.net/man/8/netstat)

## Content Target
Networking

## Target Skill Level
2

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Which of the following commands WILL NOT display information about the system's routing table?

## Code Snippet (optional)

## Answer Key
`ifconfig -r`

## Distractors
### 1.
`netstat -rn`

### 2.
`ip route`

### 3.
`route -n`

## Common errors, misconceptions, or irrelevant information:
1. Will show the routing table, although probably not the first command to come to mind for this purpose. *This also works for BSD.
2. This is the "preferred" command to use as the ip suite has replaced ifconfig.
3. Will display the routing name without resolving names.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
