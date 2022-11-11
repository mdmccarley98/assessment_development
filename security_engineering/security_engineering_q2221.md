# Security Engineering 3: Outdated Software


## Item ID
2221

## Claim
3


## Claim Behavior (evidence)

> You are likely vulnerable: If the software is vulnerable, unsupported, or out of date. This includes the OS, web/application server, database management system (DBMS), applications, APIs and all components, runtime environments, and libraries. If you do not scan for vulnerabilities regularly and subscribe to security bulletins related to the components you use.

> -- https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/

> The problem with using known vulnerable components was described very well in a paper by Jeff Williams and Arshan Dabirsiaghi titled, “Unfortunate Reality of Insecure Libraries”. The gist of the paper is that we as a development community include third party libraries in our applications that contain well known published vulnerabilities (such as those at the National Vulnerability Database).
> -- https://owasp.org/www-project-dependency-check/

## Content Target
system updates


## Cognitive Model

Comprehend


## Item Type

Multiple Choice


## Stem

Your team is responsible for ensuring that all dependencies of a web application are up to date and have no known vulnerabilities.

Which of the following solutions would help accomplish this goal best?

## Code Snippet (optional)



## Answer Key

Run a CI/CD pipeline nightly for the web application and include a dependency scan stage.


## Distractors
### 1.

Ensure all developers are using a git pre-commit hook script that scans the code for vulnerabilities before pushing.

### 2.

Add a stage to the CI/CD pipeline that scans for vulnerabilities.


### 3.

During the design phase, ensure all proposed dependencies are not vulnerable.


## Common errors, misconceptions, or irrelevant information:

1. While this is recommended in most cases since it pushes security further left, the dependencies are only scanned when code is pushed to the git repo. So this would not continually ensure the code is not vulnerable.
2. This is a great step but if no code is pushed to trigger the pipeline then the dependencies are not scanned for vulnerabilities.
3. This will not help keep vulnerabilities from popping up later on.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

