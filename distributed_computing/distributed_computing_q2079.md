# Distributed Computing 1: Cassandra


## Item ID
2079

## Claim

-   Claim: 1


## Threshold Probabilities
[0.10, 0.20, 0.40, 0.60]

## Claim Behavior (evidence)


> A replication factor of 1 means that there is only one copy of each row in the cluster.  
> -- https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/architecture/archDataDistributeReplication.html

> Now select the partition key and the primary key. They are all the same since we > want them all stored on the same virtual node.
> 
>     select token(isbn), isbn from books;
> 
> | system.token(isbn)  | isbn |
> | ------------------- | ---- |
> | -175843201295106731 |  111 |
> | -175843201295106731 |  111 |
> | -175843201295106731 |  111 |
> 
> -- https://www.bmc.com/blogs/cassandra-clustering-columns-partition-composite-key/



## Content Target
Cassandra


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
The sales data is stored in a Cassandra cluster in a single data center with 10 nodes.  The following is the table schema and data:

```sql
CREATE KEYSPACE example WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE example;

CREATE TABLE sales (
    state text,
    city text,
    total int,
    PRIMARY KEY (state, city, total)
);

INSERT INTO sales (state, city, total) values ('California', 'San Francisco', 45);
INSERT INTO sales (state, city, total) values ('California', 'San Francisco', 23);
INSERT INTO sales (state, city, total) values ('California', 'Sacramento', 7);
INSERT INTO sales (state, city, total) values ('California', 'Tustin', 2);
INSERT INTO sales (state, city, total) values ('California', 'San Diego', 23);
```

How many nodes contain the sales data?


## Code Snippet (optional)



## Answer Key
1


## Distractors
### 1.
5


### 2.
10


### 3.
4


## Common errors, misconceptions, or irrelevant information:

The first value in the primary key is the partition key.
The partition key is `state`.
All the data is in California, so it's partitioned into one node.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

