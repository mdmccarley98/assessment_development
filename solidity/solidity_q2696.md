# Solidity - flashLoan Function

## Item ID
2696

## Claim
Claim 2

## Claim Behavior (evidence)
https://gist.github.com/cryptoscopia/1156a368c19a82be2d083e04376d261e

Lines: 85 - 164

## Content Target
flashLoan function

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You have been tasked with writing a flash loan contract to test flash loan-based vulnerabilities and exploit possibilities in a decentralized exchange run by one of your clients. Today you are writing the function that is called when executing the flash loan contract. A fellow developer had started writing it before you but stopped after getting stuck with six missing lines. Please choose the answer that correctly completes the six missing lines.

## Code Snippet (optional)
```solidity
function Loan(uint loanAmount) external {
    Actions.ActionArgs[] memory operations = new Actions.ActionArgs[](3);

    operations[0] = Actions.ActionArgs({
        // missing line 1 _____________________
        accountId: 0,
        amount: Types.AssetAmount({
            sign: false,
            denomination: Types.AssetDenomination.Wei,
            // missing line 2 _________________
            value: loanAmount // Amount to borrow
        }),
        primaryMarketId: 0, // WETH
        secondaryMarketId: 0,
        // missing line 3 ______________________
        otherAccountId: 0,
        data: ""
    });
    
    operations[1] = Actions.ActionArgs({
            actionType: Actions.ActionType.Call,
            accountId: 0,
            amount: Types.AssetAmount({
                sign: false,
                denomination: Types.AssetDenomination.Wei,
                ref: Types.AssetReference.Delta,
                value: 0
            }),
            primaryMarketId: 0,
            secondaryMarketId: 0,
            otherAddress: address(this),
            otherAccountId: 0,
            // missing line 4 ____________________
                msg.sender,
                loanAmount
            )
        });
    
    operations[2] = Actions.ActionArgs({
        actionType: Actions.ActionType.Deposit,
        accountId: 0,
        // missing line 5 _________________________
            sign: true,
            denomination: Types.AssetDenomination.Wei,
            ref: Types.AssetReference.Delta,
            value: loanAmount + 2 // Repayment amount with 2 wei fee
        }),
        primaryMarketId: 0, // WETH
        secondaryMarketId: 0,
        otherAddress: address(this),
        otherAccountId: 0,
        data: ""
    });

    // missing line 6 ______________________________
    accountInfos[0] = Account.Info({owner: address(this), number: 1});

    soloMargin.operate(accountInfos, operations);
}
// dydx: AGPL-3.0-or-later licence
```

## Answer Key
```solidity
actionType: Actions.ActionType.Withdraw, // completes missing line 1
ref: Types.AssetReference.Delta, // completes missing line 2
otherAddress: address(this), // completes missing line 3
data: abi.encode( // completes missing line 4
amount: Types.AssetAmount({ // completes missing line 5
Account.Info[] memory accountInfos = new Account.Info[](1); // completes missing line 6
```

## Distractors
### 1.
```solidity
action: Actions.ActionType.Call, // completes missing line 1
ref: Types.Reference.Delta, // completes missing line 2
otherAddress: address[this] // completes missing line 3
data: abi.encode( // completes missing line 4
amount: Types.AssetAmount({ // completes missing line 5
Account.Info[] memory accountInfos = new Account.Info(1); // completes missing line 6
```

### 2.
```solidity
actionType: Actions.ActionType.withdraw, // completes missing line 1
ref: Types.AssetReference.Delta, // completes missing line 2
otherAddress: address[this], // completes missing line 3
withdraw: abi.encode( // completes missing line 4
amount: Types.AssetAmount({ // completes missing line 5
Account.Info[] memory accountInfos == new Account.Info[](1); // completes missing line 6
```

### 3.
```solidity
actionType: ActionType.Withdraw, // completes missing line 1
ref: Types.AssetReference.Delta, // completes missing line 2
otherAddress: address(this), // completes missing line 3
dataCall: abi.encode( // completes missing line 4
amount: Type.AssetAmount({ // completes missing line 5
Account.Info[] memory accountInfos = new Account.Info[](1); // completes missing line 6
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
