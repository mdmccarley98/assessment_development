# Backend - Cloud Storage & Hosting

## Item ID
2896

## Claim
3: infrastructure

## Target Skill Level
2

## Claim Behavior (evidence)
https://stackoverflow.com/questions/4099633/best-way-to-store-and-retrieve-big-video-files-for-a-web-based-app  
https://stackoverflow.com/questions/67976645/where-media-files-images-etc-should-be-stored-for-a-websites

## Content Target
Infrastructure, Hosting

## Cognitive Model
Comprehend, Use

## Item Type
Multiple Choice

## Stem
What is the most efficient and scalable way to store and serve large media files (e.g., images and videos) in a web application?

## Code Snippet (optional)

## Answer Key
Use an object storage service, such as Amazon S3 or Google Cloud Storage, connected to a CDN service like Cloudflare.

## Distractors
### 1.
Use a media sharing site like Flickr, Dropbox, or Apple iCloud, that has an API the application can talk to.

### 2.
Store the content alongside the source code on the application's web server.

### 3.
Store the content in the application's database or use a distributed database service like Amazon RDS.

## Common errors, misconceptions, or irrelevant information:
Keeping large media files on the server comes with many risks and downsides, both performance and security related.

Using a database becomes very inefficient and risky beyond very simple use-cases for small numbers of (small) media files.

The media sharing sites approach is neither efficient, scalable, nor reliable for this use-case, even though it might intuitively make sense.


# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
