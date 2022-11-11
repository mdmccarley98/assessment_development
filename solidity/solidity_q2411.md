# Close DeFi loan by repayment

## Item ID
2411

## Claim
Claim 3

## Target Level
3

## Claim Behavior (evidence)
https://github.com/Synthetixio/synthetix/blob/develop/contracts/Collateral.sol

Lines: 377 - 394

## Content Target
Close DeFi loan by repayment

## Cognitive Model
Use

## Item Type
Multiple choice

## Stem
The function included below closes closes a DeFi loan by repayment. However, two instructions are missing. **Choose the option that includes the correct missing instructions.**

## Code Snippet (optional)
```
function _closeLoanByRepayment(address borrower, uint id) internal returns (uint amount, uint collateral) {
    // 0. Get the loan.
    Loan storage loan = loans[id];

    // 1. Repay the loan with its collateral.
    (amount, collateral) = _repayWithCollateral(borrower, id, loan.amount);

    // 2. Pay the service fee for collapsing the loan.
    // Missing instruction 1
    // Missing instruction 2
    collateral = collateral.sub(serviceFee);

    // 3. Record loan as closed.
    _recordLoanAsClosed(loan);

    // 4. Emit the event for the loan closed by repayment.
    emit LoanClosedByRepayment(borrower, id, amount, collateral);
}
// synthetix.io: MIT License
```

## Answer Key
```
uint serviceFee = amount.multiplyDecimalRound(getCollapseFeeRate(address(this)));
_payFees(serviceFee, sUSD);
```

## Distractors
### 1.
```
uint serviceFees = amount.multiplyDecimalRound(getCollapseFeeRate(address(this)));
_payFees(serviceFee, sUSD);
```

### 2.
```
uint serviceFee = amount.multiplyDecimalRound(getCollapseFeeRate(address(this));
_payFees(serviceFee, sUSD);
```

### 3.
```
uint serviceFee = amount;multiplyDecimalRound(getCollapseFeeRate(address(this)));
_payFees(serviceFee, sUSD)
```

## Common errors, misconceptions, or irrelevant information:
- Irrelevant information:
    - Synthetix has had 19 code audits.

https://www.defipulse.com/projects/synthetix

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
