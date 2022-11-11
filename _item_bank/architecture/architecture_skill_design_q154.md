# architecture_skill

## Item ID
q154

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
You're writing a music editing app. Once a composition is done, the app encodes it (asynchronously) into a specified audio format (.mp3 or .ogg). When the encoding is complete, you'd like to update the UI in several places in the app. Which of the following approaches to this problem makes the most sense?

## Code Snippet (optional)


## Answer Key
The important thing here is that we separate the UI update from the actual encoding logic. The encoding system should not know about UI. A good way to do this is a broadcast event. The encoding system can broadcast an event when a song is encoded. The UI code can listen for this event, and update the UI when it sees it.

## Distractors

### 1.
A spin lock is a good way to do this. The UI code can enter a spin lock, continually checking if the encoding is done. When it is, it can update the UI and exit the lock. As long as the spin lock is not on the main thread, this will work well.

### 2.
We can simply have the encoding system take a list of UI elements as parameters. When the encoding is done, it can tell the UI elements to update themselves.

### 3.
This is a perfect place for a factory method. The encoder will be the factory. When it is done with its fabrication (encoding the audio), the assembly line will take it to the UI elements, which can update the UI, before passing the composition further along the chain.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

