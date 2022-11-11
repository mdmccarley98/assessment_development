# CDN File Integrity

## Item ID
2140

## Claim
Claim 3: responsive_ui

## Claim Behavior (evidence)
[Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) - developer.mozilla.org

## Content Target
Security

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Your application's static files are delivered to users via a CDN.  These files do not contain sensitive information, but in this application it is still important to ensure that users cannot receive modified versions of the files in the case that the CDN has had an unknown security breach.

How do you keep the performance benefits of the CDN while being certain that the files delivered are the ones expected by the HTML file that references them?

## Code Snippet (optional)

## Answer Key
Use the `integrity` attribute in elements that refer to the files.

## Distractors
### 1.
Add a random query parameter to your request URLs.

### 2.
Only allow access to the files via HTTPS.

### 3.
Only request the files from a Secure Browser Context.

## Common errors, misconceptions, or irrelevant information:
* Adding a random query parameter would negate the benefits of the CDN.  It also would not provide protection from modification.
* HTTPS only provides encryption for a file in transport.  Files are unencrypted on the CDN.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
