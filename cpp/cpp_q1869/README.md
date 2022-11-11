# C➕➕ Memory: arrow or dot

## Item ID
1869

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.50, .65, .85, .90]

## Claim Behavior (evidence)
> Difference between Dot(.) and Arrow(->) operator:
>
> * The Dot(.) operator is used to normally access members of a structure or union.
> * The Arrow(->) operator exists to access the members of the structure or the unions using pointers.
>
> -- https://www.geeksforgeeks.org/arrow-operator-in-c-c-with-examples/


```
$ make
Scanning dependencies of target example
[ 50%] Building CXX object CMakeFiles/example.dir/example.cpp.o
[100%] Linking CXX executable example
[100%] Built target example
$ ./example
new Party: 1
new Pizza: 2
Pizza 2 brought to 1
g_id: 2
```
- [example.cpp](./example.cpp)

## Content Target
* pointers

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
You have two classes `Pizza` and `Party`.

How do you pass a cooked `Pizza` into the `bring` function of `Party`?

## Code Snippet (optional)
```cpp
class Pizza {
public:
    Pizza& cook() {
        return *this;
    }
};

class Party {
public:
    void bring(Pizza& pizza) {}
};

int attend(Party& party, Pizza* pizza) {
    // *** CHOOSE C++ THAT GOES HERE ***
}
```

## Answer Key
```cpp
    party.bring(pizza->cook());
```

## Distractors
### 1.
```cpp
    party->bring(pizza->cook());
```


### 2.
```cpp
    party.bring(pizza.cook());
```


### 3.
```cpp
    party->bring(pizza.cook());
```


## Common errors, misconceptions, or irrelevant information:
Most C/C++ based languages like Java and C# got rid of the `->` arrow operator.

> We tried to find a way to prevent a pointer (or reference) to the referred-to object to escape from the smart reference,
> but couldn’t find a simple way of guaranteeing that so we gave up, quoting “C++ protects against Murphy, not Machiavelli.” 
> We ensured that you can define a matching set of smart . (dot), -> (arrow), * (dereference), and [] (subscript) 
> operators with the relations they have for built-in types.
> 
> -- By Bjarne Stroustrup | Feb 22, 2016 03:27 PM
> -- https://isocpp.org/blog/2016/02/a-bit-of-background-for-the-operator-dot-proposal-bjarne-stroustrup

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
