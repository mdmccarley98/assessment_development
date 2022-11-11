# Warehousing / ETL: N+1 selects

## Item ID
2713

## Claim
Claim 1

## Target Skill Level

## Threshold Probabilities:
[0.35, 0.55, 0.75, 0.85]

## Claim Behavior (evidence)

## Content Target
Efficient Querying

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Suppose we have a video sharing service, where the database has a Video table and a Comment table. Each comment is associated with a specific video.
<br><br>
In which of the following use cases can the "N+1 queries" or "N+1 selects" problem occur when using SQL?

## Code Snippet (Optional)

## Answer Key
We want to fetch a list of videos and the comments for each video.

## Distractors
### 1.
We want to fetch all comments for a specific video, sorted by posting date.

### 2.
We want to delete a video and automatically delete all associated comments.

### 3.
We want to count the number of comments posted in a specific time period.

## Common errors, misconceptions, or irrelevant information (Optional):
The N+1 select problem would occur if we first do one select to fetch the videos and then issue an additional select for each of the N videos.

The appropriate way to do it is to combine all the selects into one big select using a join, avoiding many round trips to the database.

### 1.

### 2.

### 3.

## Triplebyte Review
- Language Review:
- Bias/Fairness Review:
- Content Review:
