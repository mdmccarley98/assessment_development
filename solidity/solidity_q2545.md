# Vault deposit

## Item ID
2545

## Claim
Claim 3

## Claim Behavior (evidence)
https://github.com/beefyfinance/beefy-contracts/blob/master/contracts/BIFI/vaults/BeefyVaultV6.sol

Lines 98 - 117;

## Content Target
Vault deposit

## Cognitive Model
Comprehend

## Item Type
Multiple choice

## Stem
What is this function used for?

## Code Snippet (optional)
```solidity
function deposit(uint _amount) public nonReentrant {
    strategy.beforeDeposit();

    uint256 _pool = balance();
    want().safeTransferFrom(msg.sender, address(this), _amount);
    earn();
    uint256 _after = balance();
    _amount = _after.sub(_pool); // Additional check for deflationary tokens
    uint256 shares = 0;
    if (totalSupply() == 0) {
        shares = _amount;
    } else {
        shares = (_amount.mul(totalSupply())).div(_pool);
    }
    _mint(msg.sender, shares);
}
```

## Answer Key
This function is used as the entry point of funds into the system. Users deposit with this function into the vault.

## Distractors
### 1.
This function is used as the exit point of funds out of the system. Users withdraw their funds with this function out of the vault. 

### 2.
This function is used as the vesting location of funds in the system.

### 3.
This function is used as the entry point of deflationary tokens into the burn process. 

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
