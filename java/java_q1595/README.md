# Input and Output

## Item ID
1595

## Claim
Claim 2: libraries_frameworks

## Claim Behavior (evidence)

* [Buffered Streams](https://docs.oracle.com/javase/tutorial/essential/io/buffers.html) - Oracle
* [Class BufferedReader](https://docs.oracle.com/javase/10/docs/api/java/io/BufferedReader.html) - Oracle

## Content Target
IO

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

The class, `java.io.BufferedReader`, is used to:


## Code Snippet (optional)


## Answer Key
Improve the performance of a character input stream by reducing the number of IO operations that are necessary


## Distractors

### 1.
Block access at the OS level to an input stream source from other consumers until the stream has completed

### 2.
Produce a text-to-speech synthesized audio output buffer from character input

### 3.
Throttle the throughput of a byte input stream so that the handler code does not overwhelm CPU resources


## Common errors, misconceptions, or irrelevant information (optional):
* Java makes very few assumptions regarding how IO should be performed. It is left to the developer to decide, for instance, whether a stream should be buffered.
* It is common for programs to handle files one character or one line at a time.  Without buffering, this would cause a lot of slow IO operations.
* Java makes it easy to turn a stream into a buffered stream by simply wrapping it with the appropriate Buffer class.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)