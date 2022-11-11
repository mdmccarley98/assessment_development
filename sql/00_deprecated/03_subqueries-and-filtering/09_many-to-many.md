# SQL

## Claim

Claim 3 (Subqueries and Filtering): Can filter to relevant rows using IN, EXISTS, WITH statements and extract information using window functions.

## Claim Behavior (evidence)

Many-to-many https://docs.microsoft.com/en-us/analysis-services/multidimensional-models/define-a-many-to-many-relationship-and-many-to-many-relationship-properties?view=asallproducts-allversions

## Content Target

`Understand the modeling of a many-to-many relationship in SQL`

## Cognitive Model

Use

## Item Type

Multiple Choice

## Stem

Suppose you are designing a data model that needs to capture the relationship between two tables: `students (student_id)` and `classes (class_id)`.  A student can be enrolled in many classes, and classes can contain many students.  What design captures this many-to-many relationship?

## Code Snippet (Optional)

```

```

## Answer Key

Create a joining table with two foreign keys -- one that refers to `student_id`, and one that refers to `class_id`

## Distractors

### 1.

Add a `class_id` foreign key to the `students` table

### 2.

Add a `student_id` foreign key to the `classes` table

### 3.

Add a `class_id` foreign key to the `students` table and add a `student_id` foreign key to the `classes` table

## Common errors, misconceptions, or irrelevant information (Optional):

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
