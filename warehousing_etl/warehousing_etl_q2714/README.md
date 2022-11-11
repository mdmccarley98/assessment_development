# Warehousing / ETL - Database Design: Identity Columns

## Item ID
2714

## Claim
Claim 1

## Threshold Probabilities
[0.35, 0.55, 0.75, 0.85]

## Claim Behavior (evidence)
[PostgreSQL](https://www.postgresql.org/docs/current/functions-sequence.html)
> To avoid blocking concurrent transactions that obtain numbers from the same sequence, the value obtained by nextval is not reclaimed for re-use if the calling transaction later aborts. This means that transaction aborts or database crashes can result in gaps in the sequence of assigned values. 

[SQL Server](https://www.sqlservertutorial.net/sql-server-basics/sql-server-identity/)

> SQL Server does not reuse the identity values. If you insert a row into the identity column and the insert statement is failed or rolled back, then the identity value is lost and will not be generated again. This results in gaps in the identity column.

[DB2](https://www.ibm.com/docs/en/db2-for-zos/12?topic=programs-identity-columns)

[Oracle](https://docs.oracle.com/database/121/SQLRF/statements_6017.htm#SQLRF01314)
> When a sequence number is generated, the sequence is incremented, independent of the transaction committing or rolling back.
> It is possible that individual sequence numbers will appear to be skipped, because they were generated and used in a transaction that ultimately rolled back

[SQL 2003](https://sigmodrecord.org/publications/sigmodRecord/0403/E.JimAndrew-standard.pdf)

[MySQL](https://dev.mysql.com/doc/refman/8.0/en/innodb-auto-increment-handling.html)

## Content Target
Database design

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
The 2003 SQL standard defines "identity columns" using the keyword `IDENTITY`. You can use this to provide unique values for a primary key column that comes from an automatically incrementing counter.
<br><br>
In SQL databases supporting this feature like PostgreSQL 10+, DB2, SQL Server, or Oracle 12+, what happens if an `INSERT` involving one of these counters is rolled back?

## Code Snippet (Optional)

## Answer Key
The database guarantees that the key is unique, but some counter values may be skipped leaving gaps.

## Distractors
### 1.
The database guarantees that the key is unique AND that no counter values are skipped.

### 2.
The counter might not be incremented, and two rows could have the same key.

### 3.
The entire table could become corrupted.

## Common errors, misconceptions, or irrelevant information (Optional):
The stronger guarantee in distractor one would cost too much performance, especially when considering scenarios with multiple concurrent writers. 

The weaker guarantees in distractors 2 and 3 would make the feature too risky. 

Even databases that provide their own nonstandard mechanism for this, like `AUTO_INCREMENT` in MySQL, still work the same for the same reasons.

## Triplebyte Review
- Language Review:
- Bias/Fairness Review:
- Content Review:
