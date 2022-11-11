# Backend - Session Management Server

## Item ID
2737

## Claim
3

## Target Skill Level
3

## Claim Behavior (evidence)
NA

## Content Target
Session Management

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You work on a project with a server-side rendered web application. The web server started gaining a lot of traffic, so the team decided to scale the application by adding a couple of servers to handle the increased number of client requests. After this change, many users are complaining about being logged out randomly from the site. What's the most reasonable explanation?

## Code Snippet (optional)

## Answer Key
The user session is being stored locally on each server.

## Distractors
### 1.
The session ID cookie is not reaching some servers behind the load balancer.

### 2.
The load balancer is sending all requests to one server.

### 3.
The problem is related to using Single Sign-On authentication.

## Common errors, misconceptions, or irrelevant information:
Distractor 1: The cookie is sent to every request on the same domain. And it would be uncommon for a load balancer to not send the cookie header only to some servers.

Distractor 2: If that's the case, the problem would not happen but the load on this server would be the same as before.

Distractor 3: User authentication methods are irrelevant in this scenario.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
