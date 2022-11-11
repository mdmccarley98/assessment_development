# backend_web_understanding - HTTP Timeout Retry

## Item ID
2852

## Claim
2

## Claim Behavior (evidence)
NA

## Target Skill Level
Level 4

## Content Target
Web APIs (HTTP)

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
A credit card company uses an external web service to send emails to its customers. The company's server calls this service every time it receives a REST API request from a mobile application when customers request to block their cards, offering them the opportunity to apply for a new one. However, the email service can sometimes be unresponsive, especially during regular monthly 30 minutes outages.
<br><br>
What is the best way to interact with such a service and account for its unreachability from the REST resource handling card blockings?

## Code Snippet (optional)

## Answer Key
Spawn a separate asynchronous task that would make a request to the email service. In case of unavailability of the service, the task would repeat itself in exponentially increasing time (starting from 1 hour) until successful or until a defined number of requests were reached.

## Distractors

### 1.
Spawn a separate asynchronous task that would make a request to the email service. In case of unavailability of the service, the task would repeat itself every 5 seconds until successful.

### 2.
Make a request to the email service after the state of the card has been set as blocked in the database. In case of unavailability of the service, ignore the error.

### 3.
Make a request to the email service before the state of the card has been set as blocked in the database. In case of unavailability of the service, the server returns the response to the mobile application with an error message informing the user about the outage and to try it again later.

## Common errors, misconceptions, or irrelevant information:
- All unnecessary requests should be made asynchronously
- Server returns 5XX errors during an outage, overloading or planned maintenance which usually happens during a short period of time so spawning multiple requests within the same period won't help (especially for the tasks that do not have to be done immediately)
- Unavailability of the external server should not abort the request of the customer

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
