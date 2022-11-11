# architecture_skill

## Item ID
q151

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
You need to build a web crawler to search the Internet for references to the Power Rangers (clearly a very important task). How might you build this web crawler?

## Code Snippet (optional)


## Answer Key
A distributed worker system with a job queue could be used to dispatch scrapers. Each individual scraper would take a URL, download the page, parse it, and add hyperlinked URLs to a database. The database would track the last time that each URL was scraped, and jobs will be queued for URLs that need to be scraped.

## Distractors

### 1.
We can write a simple program using curl and an HTML parsing library (like nokogiri or beautiful soup). The script will have a scrape method that will take a start URL, download and parse that URL, and then recursively call itself on every link found in the page.

### 2.
A good way to do this is to just enumerate all IP addresses. We can then open an HTTP connection to each, and request all the pages that it serves.

### 3.
Hadoop (MapReduce) is a great technology to scale up web crawling. We can set up an HDFS cluster, and split all the URLs to be scraped between them. The reduce step is just combining all the references from each computer in the cluster.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

