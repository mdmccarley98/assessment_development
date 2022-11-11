# Certificate Trust

## Item ID
2136

## Claim
Claim 5

## Claim Behavior (evidence)
> Web browsers come preloaded with a list of "root certificates". The browser can use these to reliably check that the website certificate was signed by a certificate authority  that "chains back" to the root certificate (i.e. was trusted by the owner of the root certificate or an intermediate CA).
[Certificate authority](https://developer.mozilla.org/en-US/docs/Glossary/Certificate_authority)

## Content Target
Security

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Complete the following statement.

In order for a digital certificate to be trusted by a browser, the certificate must:

## Code Snippet (optional)

## Answer Key
be signed by any Certificate Authority *that chains* back to any *local* root certificate.

## Distractors
### 1.
be validated by a Certificate Trust Server that the certificate was signed *directly* by one of the Trust Server's current list of trusted Certificate Authorities.

### 2.
be validated by a *Certificate Trust Server* that the certificate was signed by any Certificate Authority *that chains* back to any of the *server's* root certificates.

### 3.
be signed *directly* by a pre-approved Certificate Authority whose trusted certificate is in a *local* certificate store.

## Common errors, misconceptions, or irrelevant information:
* The system trusts intermediate Certificate Authorities as long as a chain of trust can be established to a root certificate.
* PKI doesn't use "Certificate Trust Servers".  It uses "root stores" that are shipped with browsers and operating systems.  So... update your software ;)

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
