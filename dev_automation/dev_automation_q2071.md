# Dev Automation 2: Signing iOS


## Item ID
2071

## Claim

- Claim: 2


## Threshold Probabilities

[0.30, 0.40, 0.50, 0.70]

## Claim Behavior (evidence)

> "fastlane is the easiest way to automate beta deployments and releases for your iOS and Android apps."  
> -- https://docs.fastlane.tools  
> -- https://docs.fastlane.tools/codesigning/getting-started/  


## Content Target

Tools

## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
Which of the following tools will help you automate signing an iOS app?


## Code Snippet (optional)



## Answer Key
Fastlane


## Distractors
### 1.
GPG


### 2.
OpenSSL


### 3.
Let's Encrypt


## Common errors, misconceptions, or irrelevant information:
Provisioning iOS apps is one of the most difficult parts of automating a build pipeline.
Many CI/CD products use 'just use fastlane' to automate this process.

* https://docs.fastlane.tools/best-practices/continuous-integration/travis/
* https://circleci.com/case-studies/fastlane/
* https://github.com/Microsoft/fastlane-plugin-appcenter
* https://www.raywenderlich.com/1774995-continuous-integration-with-github-fastlane-jenkins

1. GPG will sign any file, including an iOS app, but signing an iOS app generally means so that it can be installed on an iOS device.
2. OpenSSL isn't designed to sign iOS apps for the App Store, which is what is meant by "signing an iOS app"
3. Let's Encrypt will help you make a domain certificate, but you can't use that certificate to get an iOS app on an iOS device.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

