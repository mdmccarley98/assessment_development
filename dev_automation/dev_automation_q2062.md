# Dev Automation 3: sshd AuthorizedKeysCommand


## Item ID
2062

## Claim

- Claim: 3

## Threshold Probabilities

[0.20, 0.40, 0.60, 0.80]

## Claim Behavior (evidence)

> AuthorizedKeysCommand Specifies a program to be used for lookup of the user's
> public keys. The program will be invoked with its first argument the name of
> the user being authorized, and should produce on standard output AuthorizedKeys
> lines (see AUTHORIZED_KEYS in sshd(8)).
> -- https://linux.die.net/man/5/sshd_config


## Content Target

Machine Access
Security

## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
The sshd_config file of a server contains:

```
AuthorizedKeysCommand /usr/local/bin/auth.sh
```

What does this do?

## Code Snippet (optional)



## Answer Key
AuthorizedKeysCommand sends the ssh username to a script that is customized to retrieve the users keys.


## Distractors
### 1.
AuthorizedKeysCommand sends the private key to a script that is customized to retrieve the users key.


### 2.
AuthorizedKeysCommand always runs this script as default.


### 3.
AuthorizedKeysCommand sends a list of all users to the script provided to create an authorized_keys file.


## Common errors, misconceptions, or irrelevant information:

1. It does not send the private key. Only the username.
2. By default there is no AuthorizedKeysCommand run.
3. It does not send a list of all users to the script. Nor does it create the authorized_keys file.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

