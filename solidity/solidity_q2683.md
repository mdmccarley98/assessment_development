# Solidity - Rari Capital Protocols

## Item ID
2683

## Claim
3

## Claim Behavior (evidence)
https://docs.rari.capital/contracts/

https://github.com/Rari-Capital/fuse-v2/blob/main/src/FusePool.sol

Lines: 436 - 463

## Content Target
Rari Capital Protocols

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
A fellow developer has written an incomplete function for disabling an asset as collateral. However, the function has four missing lines. Choose the option that correctly fills in the missing lines.

## Code Snippet (optional)
```solidity
function disableAsset(ERC20 asset) public {
    // Ensure that the user is not borrowing this asset.
    // Please fill in the missing line 1 _________________________________________________
    // Ensure the user has already enabled this asset as collateral.
    // Please fill in the missing line 2 _________________________________________________

    // Remove the asset from the user's list of collateral.
    for (uint256 i = 0; i < userCollateral[msg.sender].length; i++) {
        if (userCollateral[msg.sender][i] == asset) {
            // Copy the value of the last element in the array.
            ERC20 last = userCollateral[msg.sender][userCollateral[msg.sender].length - 1];

            // Remove the last element from the array.
            // Please fill in the missing line 3 __________________________________________

            // Replace the disabled asset with the new asset.
            userCollateral[msg.sender][i] = last;
        }
    }

    // Disable the asset as collateral.
    // Please fill in the missing line 4 ___________________________________________________

    // Emit the event.
    emit AssetDisabled(msg.sender, asset);
}
// rari.capital: AGPL-3.0-only licence
```

## Answer Key
```solidity
if (internalDebt[asset][msg.sender] > 0) return;
if (!enabledCollateral[msg.sender][asset]) return;
delete userCollateral[msg.sender][userCollateral[msg.sender].length - 1];
enabledCollateral[msg.sender][asset] = false;
```


## Distractors
### 1.
```solidity
if (internalDebt[asset][msg.sender] => 0) return;
if (enabledCollateral[msg.sender][asset]) return;
delete userCollateral[msg.sender][userCollateral[msg.sender].length  1];
enableCollateral[msg.sender][asset] = false;
```

### 2.
```solidity
if (internalDebt[asset][msg.sender] < 0) return;
if (!enabledCollateral[msg.sender][asset]) returns;
delete userCollateral[msg.sender][userCollateral[msg.sender].length + 1];
enabledDebt[msg.sender][asset] = false;
```

### 3.
```solidity
if (internalCollateral[asset][msg.sender] > 0) return;
if (!enabledCollateral[msg.sender][asset]) return;
delete userDebt[msg.sender][userCollateral[msg.sender].length == 1];
enabledDebt[msg.sender][asset] = false;
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
