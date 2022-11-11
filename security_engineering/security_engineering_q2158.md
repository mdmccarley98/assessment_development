# Security Engineering 5: SQL Injection Remediation


## Item ID
2158

## Claim
5


## Claim Behavior (evidence)

> The use of prepared statements with variable binding (aka parameterized queries) is how all developers should first be taught how to write database queries. They are simple to write, and easier to understand than dynamic queries. Parameterized queries force the developer to first define all the SQL code, and then pass in each parameter to the query later. This coding style allows the database to distinguish between code and data, regardless of what user input is supplied.
>
> -- https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html#defense-option-1-prepared-statements-with-parameterized-queries

## Content Target
sql injection


## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem
Which option will best remediate the following PHP SQL Injection vulnerability?



## Code Snippet (optional)

```php
$id = $_GET['id'];

$select_query = 'SELECT FROM users where id = ' . $id;

$result = $pdo->exec( $select_query );
```


## Answer Key

Use a prepared statement with a parameterized query.


## Distractors
### 1.

Use regex to filter out bad characters from the id parameter.


### 2.

Validate user input and block specific keywords.

### 3.

Modify the frontend javascript code to only allow integers for the id parameter.

## Common errors, misconceptions, or irrelevant information:

1. This may not catch all malicious content and is problematic.
2. There are ways to work around blocked keywords.
3. This will not remediate the php vulnerability.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

