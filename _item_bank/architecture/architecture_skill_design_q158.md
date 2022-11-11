# architecture_skill

## Item ID
q158

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
design

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you're writing a word processor. How might you go about implementing an "undo" feature to reverse recent changes?

## Code Snippet (optional)


## Answer Key
We could make the document file format itself be a sequence of changes to a base text. (Each change could be a substring of the file that has changed, and what it changed to). If we represented the file this way, we could replay all the changes to get its current state, but also follow them back to get older states.

## Distractors

### 1.
Whenever you enter text into the editor, it can save this text as a line in a history file. When you click undo, the program can just remove the last line from the history file, and then also remove that text from the active document.

### 2.
A markov chain is a great data structure for this. We can chain together each state of the file, along with its probability. Then, when we move back, we can just select the most probable past state.

### 3.
The word processor can simply save the document in a temp directory every few seconds (perhaps including a time stamp in every saved file). When the user clicks undo, the system can just load an older version of the file. Depending on the exact specification, you can clear these files when a session ends.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

