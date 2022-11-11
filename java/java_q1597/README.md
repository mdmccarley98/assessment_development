# GCI Interface

## Item ID
1597

## Claim
Claim 2: libraries_frameworks

## Claim Behavior (evidence)

* [Interface Servlet](https://docs.oracle.com/javaee/6/api/javax/servlet/Servlet.html#service%28javax.servlet.ServletRequest,%20javax.servlet.ServletResponse%29) - Oracle

## Content Target
Packages

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Web Servers are multithreaded in order to handle many simultaneous requests. Does this mean that Servlets must be written to be thread-safe? Why?


## Code Snippet (optional)


## Answer Key
Yes. Requests are handled by a pool of threads. These threads then interact with a single instance of a Servlet.


## Distractors

### 1.
No. Java automatically synchronizes interactions with Servlets.

### 2.
No. Every new request gets a new thread, but each new thread creates a new instance of the Servlet.

### 3.
No. Java forbids Servlets to have any mutable state. So thread-safety is not an issue.


## Common errors, misconceptions, or irrelevant information (optional):

* As stated in the Servlet documentation: "Developers must be aware to synchronize access to any shared resources such as files, network connections, and as well as the servlet's class and instance variables."

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
