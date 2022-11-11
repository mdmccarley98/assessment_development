# architecture_skill

## Item ID
156

## Claim
frontend

## Threshold Probabilities
[.45, .60, .70, .75]

## Claim Behavior (evidence)
NA

## Content Target
design

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
You work at a large e-commerce site with a catalog of several million items. Your designer has proposed an experimental redesign of the search page that reduces the size of product images (in an effort to speed page loads). How might you best go about producing these millions of new resized images?

## Code Snippet (optional)


## Answer Key
You could create an API endpoint that resizes the images when requested. This endpoint itself would be slow, but as long as the result is cached, e.g. by CDN, user will still get fast access to resized images.

## Distractors

### 1.
We should be able to use the image magick utility and a simple bash script to loop over all the images on a server, and produce resized versions. If we have multi media servers, we can just run this on all the servers.

### 2.
We can just resize the images in the HTML. HTML image tags take width and height attributes, and we can just set these to our new size.

### 3.
We could use a parallel processing system like Hadoop. This would make it simple to resize all the images efficiently.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

