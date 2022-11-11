# spark

## Item ID
1983

## Claim

Claim 4: Be able to complete everyday tasks associated with common applications and major use-cases for Spark

## Claim Behavior (evidence)

https://spark.apache.org/docs/2.2.0/sql-programming-guide.html

## Content Target

`Understand which command to use to save a dataframe to a location`

## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

Consider an external hive table that is defined in the hive metastore and points to a specific hdfs-compatible location. Which command is appropriate for saving a dataframe named `df` to the hdfs-compatible location, without updating the hive metastore?

## Code Snippet (Optional)

```

```

## Answer Key

df.write.parquet("/mnt/path/to/location")

## Distractors

### 1.

df.write.format("parquet").saveAsTable("table_name")

### 2.

df.writeStream.outputMode("complete").format("console").start()

### 3.

df.writeStream.queryName("table_name").outputMode("complete").format("memory").start()

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

This command saves the underlying data as well as updates the hive metastore

### 2.

This command writes the streaming dataframe to the console which is not an hdfs-compatible location

### 3.

This command writes the streaming dataframe to memory which is not an hdfs-compatible location

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
