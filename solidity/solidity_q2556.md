# Deploy Function

## Item ID
2556

## Claim
Claim 3

## Claim Behavior (evidence)
https://github.com/enzymefinance/protocol/blob/v4/contracts/persistent/external-positions/ExternalPositionFactory.sol

Lines 54 - 79;

## Content Target
Deploy Function

## Cognitive Model
Comprehend

## Item Type
Multiple choice

## Stem
Choose the option that states what the `deploy ` function is NOT used for?

## Code Snippet (optional)
```solidity
function deploy(
    address _vaultProxy,
    uint256 _typeId,
    address _constructLib,
    bytes memory _constructData
) external returns (address externalPositionProxy_) {
    require(
        isPositionDeployer(msg.sender),
        "deploy: Only a position deployer can call this function"
    );

    externalPositionProxy_ = address(
        new ExternalPositionProxy(_vaultProxy, _typeId, _constructLib, _constructData)
    );

    accountToIsExternalPositionProxy[externalPositionProxy_] = true;

    emit PositionDeployed(_vaultProxy, _typeId, _constructLib, _constructData);

    return externalPositionProxy_;
}
// Enzyme Protocol: GPL-3.0
```

## Answer Key
The `deploy ` function is used for deploying the contract, which contains this same function.

## Distractors
### 1.
The `deploy` function is used for emitting `PositionDeployed`.

### 2.
The `deploy `function is used for returning `externalPositionProxy_`.

### 3.
The `deploy` function is used to create a new external position proxy and add it to the list of supported external positions.

## Common errors, misconceptions, or irrelevant information:
### Common errors
- Calling a function `deploy` in a Solidity smart contract doesn't imply it is used for deploying this very contract.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
