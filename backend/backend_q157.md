# architecture_skill

## Item ID
157

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
Architecture

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Imagine you're building a massively multi-player Pac-Man game. You want hundreds of players to be able to play Pac-Man against each other at the same time. You're going to pay prize money to the best players, so it's important that you limit their ability to cheat. How might you *best* build this?

## Code Snippet (optional)


## Answer Key
A server needs to run a canonical copy of the game, with all players. Each client can also run a copy of their region of the game and use this to interpolate states between server updates. Clients would send their control inputs to the server (perhaps with a timestamp, although this raises cheating issues), and receive updates for all players near them.

## Distractors

### 1.
A peer-to-peer architecture makes the most sense; the latency of a client-server version would be a problem. Each player could have a list of peers near them in the game, and send those peers their location every frame. You could have a voting system (like a blockchain) where clients vote to resolve state conflicts and agree on the final version.

### 2.
Socket.IO is the way to go. Each client can open a WebSocket connection to the server and transmit an event whenever their player moves. These events will be emitted to every other player in the game. That way every client will know where all the other players are, can detect when they should die and remove themselves from the board.

### 3.
None of these designs make sense

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

