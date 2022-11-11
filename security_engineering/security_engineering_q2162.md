# Security Engineering 5: Password Hashing


## Item ID
2162

## Claim
5


## Claim Behavior (evidence)
> MD5 has been deemed insecure for several years.
> -- https://en.wikipedia.org/wiki/Secure_Hash_Algorithms
> The minimum work factor for bcrypt should be 10.
> -- https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#bcrypt


## Content Target
password hashing


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem

You have been asked to review some new user creation code for a python web application.

How can this code be improved?

## Code Snippet (optional)

```python
def hash_password(password):
    hashed_password = hashlib.md5(password.encode('utf-8')).hexdigest()
    return hashed_password
```


## Answer Key
Use bcrypt with a work factor of 12 or greater.


## Distractors
### 1.
Use SHA1 since it performs better than MD5.


### 2.
Use MD5 still but iterate and hash 10 times before returning the value.


### 3.
Use bcrypt with a work factor of 10 or lower.


## Common errors, misconceptions, or irrelevant information:

1. SHA1 is also insecure and should not be used.
2. This is a slight improvement but is not ideal and still does not use a salt.
3. Using bcrypt with a work factor of less than 10 is not recommended since it reduces the salt entropy thus making it slightly easier to crack.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

