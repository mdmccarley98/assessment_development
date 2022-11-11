# Solidity - [REDACTED] Cartel

## Item ID
2677

## Claim
3

## Claim Behavior (evidence)
https://redacted-cartel.gitbook.io/redacted/our-products/core-protocol-mechanics

https://etherscan.io/address/0x68f54c12631a83b5b42f683932f504819f26c4e7#code

Lines: 751 - 778

## Content Target
[REDACTED] Cartel

## Cognitive Model
Use

## Item Type
Multiple Choice 

## Stem
Below you will find a function to verify whether a low-level call was successful. It has two lines missing. Please choose the option that correctly fills in the two missing lines.

## Code Snippet (optional)
```solidity
function verifyCall(
    bool success,
    bytes memory returndata,
    // Please fill in missing line 1 ______________________
    // Please fill in missing line 2 ______________________
    if (success) {
        return returndata;
    } else {
        if (returndata.length > 0) {
            assembly {
                let returndata_size := mload(returndata)
                revert(add(32, returndata), returndata_size)
            }
        } else {
            revert(errorMessage);
        }
    }
}
// [REDACTED]Cartel: MIT licence
```

## Answer Key
```solidity
    string memory errorMessage
    ) internal pure returns (bytes memory) {
```


## Distractors
### 1.
```solidity
    string storage errorMessage
    ) external pure returns (bytes storage) {
```

### 2.
```solidity
    string memory errorMessage
    ) internal view returns (bytes memory) {
```

### 3.
```solidity
    string storage errorMessage
    ) private pure returns (bytes storage) {
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
