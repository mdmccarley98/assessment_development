# Smart Contract Calls Smart API

## Item ID
2422

## Claim
Claim 1

## Claim Behavior (evidence)
How to call APIs from Ethereum Smart Contracts

https://betterprogramming.pub/how-to-call-apis-from-ethereum-smart-contracts-e2f1500198c7  

## Content Target
Blockchain Fundamentals

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
How does a Smart Contract call an off-chain Smart API?

## Code Snippet (optional)

## Answer Key (Correct Answer)
Due to the nature of blockchain ecosystems, accessing off-chain data from on-chain smart contracts is not natively possible. Enabling this capability requires the creation of blockchain oracles, which are nodes on the network that act as a bridge between on-chain and off-chain data. Oracles allow smart contracts to retrieve data from the outside world.

## Distractors
### 1.
The Smart Contract must have the IP address of the Smart API and the port number to establish a remote procedure call and begin exchanging data for off-chain processing. Only the Smart Contract can establish or close the network connection. The Smart API does not have a network location to re-establish a connection with the blockchain ecosystem.

### 2.
The Smart API is coded within the Smart Contract as a mirror of the Smart API outside the blockchain ecosystem. The functionality of the two Smart APIs must be identical to avoid memory buffering problems. After a network connection is established between the Smart Contract/Smart API and the Smart API outside the blockchain ecosystem, data transfer can occur as if two standard network APIs were connected.

### 3.
The Smart Contract must be ERC115 compliant and create an Oracle in the blockchain ecosystem. The Oracle can then access the Smart API and begin exchanging data with the Smart API outside the blockchain ecosystem. The Oracle must validate any data sent into the blockchain ecosystem by the Smart API as ERC115 compliant before it can be passed on to the Smart Contract.

## Common errors, misconceptions, or irrelevant information:
Smart Contracts can access any site on the Internet directly and exchange data with systems outside the blockchain ecosystem.
