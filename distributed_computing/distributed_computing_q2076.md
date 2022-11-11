# Distributed Computing 2: Dead Letter


## Item ID
2076

## Claim

-   Claim: 2

## Threshold Probabilities
[0.10, 0.30, 0.50, 0.70]

## Claim Behavior (evidence)

> Dead letter queues
> What can your application do if a queue contains a message that you can’t process? Most messaging services allow you to configure a dead-letter queue for messages that you fail to process a certain number of times. This makes it easy to set them aside for further inspection without blocking the queue processing or spending CPU cycles on a message that can never be consumed successfully.
> -- https://aws.amazon.com/blogs/compute/building-scalable-applications-and-microservices-adding-messaging-to-your-toolbox/

> If the Pub/Sub service attempts to deliver a message but the subscriber can't acknowledge it, Pub/Sub can forward the undeliverable message to a dead-letter topic.
> -- https://cloud.google.com/pubsub/docs/handling-failures


## Content Target
* pub-sub


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
What is a "dead letter" in a pub/sub service?


## Code Snippet (optional)



## Answer Key
A message that was not delivered.


## Distractors
### 1.
A message that was delivered out of order, too late.


### 2.
A message from the publisher that the service will shut down.


### 3.
An encoding error with Unicode characters.


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
