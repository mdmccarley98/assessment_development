# General Coding Logic - Comparing Strings

## Item ID
2748

## Claim
2

## Target Skill Level 
2

## Claim Behavior (evidence)
The function `foo` outputs true if the strings are reversed related to the other or if `str1[str1.size()-i-1] < str2[i]` at any moment. When these strings are equal in size, it can be said that it also returns true when the reversed version of `str2` is greater than `str1`.

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
`str1` and `str2` are the string representations of positive integer numbers. What is TRUE about the code snippet below?

## Code Snippet (optional)
```java
class Example
{
    static boolean foo(String str1, String str2)
    {
        if(str1.length() != str2.length())
            return false;

        for(int i=0; i < str1.length(); i++)
        {
            if(str1.charAt(str1.length()-i-1) == str2.charAt(i))
            {
                continue;
            }
            else
            {
                return str1.charAt(str1.length()-i-1) < str2.charAt(i);
            }
        }

        return true;
    }

    public static void main(String args[])
    {
        System.out.println(foo("818","718"));
    }
}
```

## Answer Key
None of the other options are TRUE

## Distractors
### 1.
`foo` outputs true if and only if the strings are a palindrome

### 2.
`foo` returns true for all cases where the reversed version of `str2` is greater than `str1`

### 3.
`foo("818","717")` returns true

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - If they are palindrome `foo` actually returns true, but it's not only in this case.
- Distractor 2
    - `System.out.println(foo("816","727"));` returns true and `reversed(str2) < str1` 
- Distractor 3
    - `foo("818","717")` is false

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
