# C➕➕ With Parenthesis Declaration

## Item ID
2849

## Claim
1

## Claim Behavior (evidence)
An expression-statement with a function-style explicit type conversion (§8.2.3) as its leftmost subexpression can be indistinguishable from a declaration where the first declarator starts with a (. In those cases the statement is a declaration.

## Target Level
5

## Content Target
- leftmost subexpression
- declaration

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
What is the output of the code below?

## Code Snippet (optional)
```cpp
#include <iostream>

struct A 
{ 
    int num;
    A(): num(0){std::cout << "A";} 
    A(const A& a){std::cout << "a";} 
} a;

struct B 
{     
    B(){std::cout << "B";} 
    B(const B& b){std::cout << "b";} 
} b;

struct C 
{ 
    C(){std::cout << "C";} 
    C(const C& c){std::cout << "c";} 
} c;

int main() {
    a.num = 1;

    A(a);
    B(C);

    std::cout << a.num;
}
```

## Answer Key
`ABCAB0`

## Distractors

### 1.
`ABCabc1`

### 2.
`ABCABC1`

### 3.
`abC0`

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Wrong, No copy constructor is called here, a and C inside main are two new objects.
- Distractor 2
    - C is a name, it's not representing the struct C
- Distractor 3
    - all a,b,c are declared, so constructor is called here resulting in at least printing `ABC`

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
