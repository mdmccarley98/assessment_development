# architecture_skill

## Item ID
q153

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
design

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Imagine you're building a video site like Netflix. Users create accounts and watch videos. There are many restrictions on which videos each user can watch. (Some videos may only be viewable from a given country; others may be age restricted or require a paid account.) How might you best design a system to make sure that users are only able to watch videos they are authorized to see?

## Code Snippet (optional)


## Answer Key
A token authentication scheme is a good way to do this. We can write a number of restriction routines in the media server. Users can pass tokens to the media server specifying what restrictions to apply. The tokens can be signed by the backend, preventing users from changing them, and allowing the media server to enforce complex rules with little knowledge of the rest of the system.

## Distractors

### 1.
We can do the verification in a web app. We can have a controller that takes the ID of the video that the user would like to watch, and redirects to the actual media file (on another server, or perhaps on cloud storage). This controller can verify the restrictions that we care about, and return a 401 Unauthorized if the restrictions are not met.

### 2.
We can upload the videos to a bunch of different S3 buckets. All the videos that are available only in the US can be on one S3 bucket, and all the videos that require a paid account can be in another. Then, we only tell users about the video in the buckets that they are allowed to watch.

### 3.
We can just store info on each video in the database, and when we fetch a list of possible videos to watch for a user, we only return those that they are allowed to see. This way, only videos that they are allowed to watch will show up in the interface.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

