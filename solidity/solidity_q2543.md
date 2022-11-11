# Vesting Wallet

## Item ID
2543

## Claim
Claim 3

## Claim Behavior (evidence)
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/finance/VestingWallet.sol

Lines 20 - 42;

## Content Target
Vesting Wallet

## Cognitive Model
Comprehension

## Item Type
Multiple choice

## Stem
What is the purpose of this contract?

## Code Snippet (optional)
```solidity
contract One {
    event EtherReleased(uint256 amount);
    event ERC20Released(address indexed token, uint256 amount);

    uint256 private _released;
    mapping(address => uint256) private _erc20Released;
    address private immutable _beneficiary;
    uint64 private immutable _start;
    uint64 private immutable _duration;
   
    constructor(
        address beneficiaryAddress,
        uint64 startTimestamp,
        uint64 durationSeconds
    ) {
        require(beneficiaryAddress != address(0), "Beneficiary is zero address");
        _beneficiary = beneficiaryAddress;
        _start = startTimestamp;
        _duration = durationSeconds;
    }
 }
```

## Answer Key
This contract handles the vesting of Eth and ERC20 tokens for a given beneficiary.

## Distractors
### 1.
This contract handles the interest yield generation of Eth and ERC20 tokens for a given beneficiary.

### 2.
This contract handles the sale of Eth and ERC20 tokens for a given beneficiary.

### 3.
This contract handles the collateral in Eth and ERC20 tokens for a given DeFi loan.


## Common errors, misconceptions, or irrelevant information:
1. Contract holds tokens locked for a previously stipulated period for interest yield generation.
2. Contract handles token swaps and releases the purchased token only after the sale price has been transferred to the seller.
3. Contract holds token locked as collateral for a DeFi loan.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
