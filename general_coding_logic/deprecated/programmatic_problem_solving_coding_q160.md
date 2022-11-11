# programmatic_problem_solving

## Item ID
q160

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you're writing the game Tetris. Which of the following statements make the most sense?

## Code Snippet (optional)


## Answer Key
The heart of the game will be a 2D grid of booleans (or ints for multiple colors) representing the grid of blocks on the screen. The game logic will manipulate this array (perhaps through a piece class). Graphics code can then render this to the screen on every update (at whatever scale, and with whatever graphics make the most sense).

## Distractors

### 1.
The core of the design will be a drawable class, representing objects that can be drawn to the screen at a given x and y pixel location. A hierarchy of piece classes representing each of the 7 Tetris pieces will then derive from this class.

### 2.
If we store the Tetris board in a bit array, we can pack the entire board state into 25 bytes. This is not only memory efficient, it also lets us check for completed rows with a simple (and fast) bitwise AND operation (by ANDing the board with a mask representing each row).

### 3.
If the Tetris board is made immutable, the game becomes a simple state transition. A monad, then, can abstract away all the complexity. Rather than handle all the logic around moving each piece and checking for collision, we can write a move monad and a collide monad.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

