# Smart contract wallet

## Item ID
2917

## Claim
Claim 1

## Target Level
3

## Claim Behavior (evidence)
Smart contract wallet

https://crucible.alchemist.wtf/

Smart contract: Crucible.sol

https://etherscan.io/address/0x54e0395CFB4f39beF66DBCd5bD93Cca4E9273D56#code

Lines:  374-394

## Content Target
Choosing/composing a complete working sophisticated function out of a set of comments.

## Cognitive Model
Use

## Item Type
Multiple choice

## Stem
Alchemist has introduced the crucible, a smart contract wallet. At its core, a crucible is an NFT. With a crucible, a user can subscribe to multiple reward programs, store tokens securely, and easily transfer the crucible with its contents. A crucible adds another layer of protection over the standard wallet by giving the user more control over the owned assets.

When the user wants to transfer ERC20 tokens out of the crucible, a function named `transferERC20` is called.

Choose which option offers the complete working function `transferERC20`.

## Answer Key
```
function transferERC20(
    address token,
    address to,
    uint256 amount
) external override onlyOwner {
    // check for sufficient balance
    require(
        IERC20(token).balanceOf(address(this)) >= getBalanceLocked(token).add(amount),
        "UniversalVault: insufficient balance"
    );
    // perform transfer
    TransferHelper.safeTransfer(token, to, amount);
}
// crucible.alchemist.wtf: GPL-3.0
```

## Distractors
### 1.
```
function transferERC20(
    address token,
    address from,
    uint256 amount
) internal override onlyOwner {
    // check for sufficient balance
    require(
        IERC20(token).balanceOf(address(this)) <= getBalanceLocked(token).add(address),
        "UniversalVault: insufficient balance"
    );
    // perform transfer
    TransferHelper.safeTransfer(token, to, amount);
}
// crucible.alchemist.wtf: GPL-3.0
```

### 2.
```
function transferERC20(
    address token,
    address to,
    uint256 amount
) internal override onlyOwner {
    // check for sufficient balance
    require(
        IERC20(token).balanceOf(address(this)) == getBalanceLocked(token).add(amount),
        "UniversalVault: insufficient balance"
    );
    // perform transfer
    TransferHelper.safeTransfer(token, to, address, amount);
}
// crucible.alchemist.wtf: GPL-3.0
```

### 3.
```
function transferERC721(
    address ERC20,
    address to,
    uint256 amount
) {
    // perform transfer
    TransferHelper.safeTransfer(ERC20, to, amount);
}
// crucible.alchemist.wtf: GPL-3.0
```

## Common errors, misconceptions, or irrelevant information:
- ERC20 and ERC721 cannot be combined and used in a smart contract together in any form.
- function should be external to be callable outside contract
- function should ensure only owner can perform it

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
