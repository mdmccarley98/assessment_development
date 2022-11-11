# GCL: Regex Tests

## Item ID
2813

## Claim
1

## Target Level 
4

## Claim Behavior (evidence)
> A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for.

> A regular expression can be a single character, or a more complicated pattern.

> Regular expressions can be used to perform all types of text search and text replace operations.


## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Consider the statements about the code below:
<br><br>
I) Output is<br>
`false false true true`<br>
`true false true false`<br>
II) `matches` with `str2_regex` is matching just numbers less than 300 with no more than 3 digits<br>
III) `matches` with `str_regex` always begins with an uppercase letter
<br><br>
Which statements are TRUE?

## Code Snippet (optional)
```java
class Example
{
    public static void main(String args[])
    {
        String str_regex = "[A-Z]*[a-zA-Z][0-9]*=[0-9][a-z]*[0-9]*";
        System.out.println("ABCDEFm0=0ABCDEFm0".matches(str_regex) + " " +
                           "abedQ0=Q0".matches(str_regex) + " " +
                           "g233230=0".matches(str_regex) + " " +
                           "T1=8aaaaaaaaaaaa".matches(str_regex));

        String str2_regex = "[12]?[0-9]{1,2}";
        System.out.println("267".matches(str2_regex) + " " +
                           "0267".matches(str2_regex) + " " +
                           "66".matches(str2_regex) + " " +
                           "567".matches(str2_regex));
    }
}
```

## Answer Key
I and II

## Distractors

### 1.
I and III

### 2.
II and III

### 3.
I, II and III


## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - I is TRUE but III is false, `a=1` is a valid match for `str_regex`.
- Distractor 2
    - II is TRUE but III is false again.
- Distractor 3
    - III is false.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

