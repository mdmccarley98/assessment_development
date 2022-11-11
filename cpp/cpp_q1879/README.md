# C➕➕ coding: Itsy Bitsy Spider

## Item ID
1879

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.10, .30, .50, .80]

## Claim Behavior (evidence)
```
The itsy-bitsy spider went up the water spout
down came the rain and washed the spider out
up came the sun
and dried up all the rain
The itsy-bitsy spider went up the water spout
down came the rain and washed the spider out
up came the sun
and dried up all the rain
The itsy-bitsy spider went up the water spout
down came the rain and washed the spider out
up came the sun
and dried up all the rain
The itsy-bitsy spider went up the water spout
down came the rain and washed the spider out
```
[example.cpp](./example.cpp)

## Content Target
* switch/case fallthrough
* break - double nested break
* goto label

## Cognitive Model
Use

## Item Type
Multiple Choice


## Stem
The following C++ program implements a children's nursery rhyme.

What is printed if you call `nursery_rhyme(SPIDER_UP)`?

## Code Snippet (optional)
```cpp
enum Spider {
    SPIDER_UP,
    RAIN_DOWN,
    SUN_OUT,
    RAIN_DRY,
};

void nursery_rhyme(Spider state) {
    loop: while (true) {
        switch (state) {
            case SPIDER_UP:
                std::cout << "The itsy-bitsy spider went up the water spout" << std::endl;
                state = RAIN_DOWN;
            case RAIN_DOWN:
                std::cout << "down came the rain and washed the spider out" << std::endl;
                state = SUN_OUT;
                goto loop;
            case SUN_OUT:
                std::cout << "up came the sun" << std::endl;
                state = RAIN_DRY;
            case RAIN_DRY:
                std::cout << "and dried up all the rain" << std::endl;
                state = SPIDER_UP;
                break;
        }
    }
}
```


## Answer Key

The following is repeated over and over forever.
```
The itsy-bitsy spider went up the water spout
down came the rain and washed the spider out
up came the sun
and dried up all the rain
```

## Distractors

### 1.
The following is printed once.
```
The itsy-bitsy spider went up the water spout
down came the rain and washed the spider out
up came the sun
and dried up all the rain
```

### 2.
The following is printed once.
```
The itsy-bitsy spider went up the water spout
```

### 3.
The following is repeated over and over forever.
```
The itsy-bitsy spider went up the water spout
down came the rain and washed the spider out
```


## Common errors, misconceptions, or irrelevant information:
The break in the switch, only exits the switch, not the for loop.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
