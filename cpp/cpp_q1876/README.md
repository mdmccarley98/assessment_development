# C➕➕ 5 OOP: multiple inheritance

## Item ID
1876

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.10, .30, .55, .85]

## Claim Behavior (evidence)
> This issue can be solved by using explicit qualification. We explicitly say to the compiler where to get the function that we need to call:
>
>     C* pc = new C;
>     pc->f();
>     pc->A::f(); //this calls f() from class A
>     pc->B::f(); //this calls f() from class B
> 
> -- https://www.cprogramming.com/tutorial/multiple_inheritance.html

## Content Target
* inheritance
* multiple inheritance

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
The `Player` class inherits from both `Character` and `Network`.
However there is an error in the code below.

How do you get the character id or the network id?

## Code Snippet (optional)
```cpp
#include <iostream>

class Character {
public:
    unsigned int getId() { return 1; }
};

class Network {
public:
    unsigned int getId() { return 0xC0A80101; }
};

class Player: public Character, public Network {};

int main() {
    auto player = Player{};
    std::cout << "character id: " << player.getId() << std::endl;
    std::cout << "network id: " << player.getId() << std::endl;
}
```

## Answer Key
Use the following syntax to call a specific function:
```cpp
    std::cout << "character id: " << player.Character::getId() << std::endl;
    std::cout << "network id: " << player.Network::getId() << std::endl;
```

## Distractors
### 1.
Use these wrapper functions in Player:
```cpp
    unsigned int getCharacterId() { return this->Character->getId(); }
    unsigned int getNetworkId() { return this->Network->getId(); }
```

### 2.
Use these wrapper functions in Player:
```cpp
    unsigned int getCharacterId() { return Character->getId(); }
    unsigned int getNetworkId() { return Network->getId(); }
```

### 3.
Use the following syntax to call a specific function:
```cpp
    std::cout << "character id: " << player.Character.getId() << std::endl;
    std::cout << "network id: " << player.Network.getId() << std::endl;
```

## Common errors, misconceptions, or irrelevant information:
This also works:
```cpp
    unsigned int getCharacterId() { return Character::getId(); }
    unsigned int getNetworkId() { return Network::getId(); }
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
