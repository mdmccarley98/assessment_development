# Solidity - Tornado Cash

## Item ID
2682

## Claim
1

## Claim Behavior (evidence)
https://tornado.cash/

## Content Target
Tornado Cash

## Cognitive Model
Comprehension

## Item Type
Multiple Choice 

## Stem
Tornado Cash is a transaction anonymization protocol based on zkSNARKS and written in Solidity. Users can deposit fixed sums of EVM compatible blockchain cryptocurrencies such as Ethereum, DAI, or USDC. Below you will find a function from the TornadoCash_eth smart contract. What does the output of this function indicate?

## Code Snippet (optional)
```solidity
function isKnownRoot(bytes32 _root) public view returns(bool) {
    if (_root == 0) {
        return false;
    }
    uint32 i = currentRootIndex;
    do {
        if (_root == roots[i]) {
            return true;
        }
        if (i == 0) {
            i = ROOT_HISTORY_SIZE;
        }
        i--;
    } while (i != currentRootIndex);
    return false;
}
```

## Answer Key
It indicates whether the root is present in the root history.

## Distractors

### 1.
It indicates whether every root is identical.

### 2.
It indicates whether the hash of the transaction has been produced.

### 3.
It indicates the size of the current and the past root index.

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
