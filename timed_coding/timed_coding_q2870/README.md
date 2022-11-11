# Timed Coding - Staircases

## Item ID
2870

## Claim

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Staircase variations

## Category
Debugging

## Stem
Given an `n * n` grid, find the number of staircase variations that start from the bottom left corner and end in the top right corner. The first step of the staircase has to have a minimum height of 1, and likewise, the last step has to have a minimum width of 1.

Constraints:

- 0 < `n` < 1000

Requirements:

- The result should be returned as a string

Examples:

- For `n = 1`, there is 1 possible variation
- For `n = 2`, there are 2 possible variations
- For `n = 3`, there are 5 possible variations

![stairs.png](https://i.imgur.com/qdmPnnG.png)

## Function Name
`countVariations`

## Argument Details ("arg_name" : default_input)
"n" : 2

## Return Example ("return_example" : return_value)
"return_example" : "2"

## Time to Complete
300s

## Public Test Cases (Seen by Candidate)
### 1.
[2, "2"]

### 2.
[3, "5"]

### 3.
[10, "16796"]

### 4.
[20, "6564120420"]

## Private Test Cases (NOT Seen by Candidate)
### 1.
[1, "1"]

### 2.
[30, "3814986502092304"]

### 3.
[50, "1978261657756160653623774456"]

### 4.
[99, "227508830794229349661819540395688853956041682601541047340"]

### 5.
[200, "512201493211017079467541693136328292324432464582475861864920694407578768023144072628540276213813397768975366156750120"]

### 6.
[999, "512294053774259558362972111801106814506359401696197357133662490663268680890966422168317407249277190145438911035517264555381561230116189292650837306095363076178842645481320822198226994485371813976409676367032381831285411152247284028125396742405627998638503788368259307920236258027800099771751391617605088924033394630230806037178021722568614945945597158227817488131642780881551702876651234929533423690387735417418121162690198676382656195692212519230804188796272372873746380773141117366928488415626459630446598074332450038402866155063023175006229242447751399777865500335793470023989772130248615305440"]

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.

### 2.

### 3.

### 4.

## Private Test Cases
### 1.

### 2.

### 3.

### 4.

### 5.

### 6.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
