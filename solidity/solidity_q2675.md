# ETH Options

## Item ID
2675

## Claim
3

## Claim Behavior (evidence)
https://hegic.gitbook.io/start/faq-1/eth-call-options

https://etherscan.io/address/0xEfC0eEAdC1132A12c9487d800112693bf49EcfA2#code

## Content Target
ETH Options

## Cognitive Model
Use

## Item Type
Multiple Choice 

## Stem
Below you will find a function from an options smart contract which sends profits from the pool to an option holder's address. It has two lines missing. Please fill in these lines.

## Code Snippet (optional)
```solidity
function payTotalprofit(uint optionID)
        internal
        returns (uint profit)
    {
        // Fill in missing line 1______________________
        // Fill in missing line 2______________________       
        uint256 currentPrice = uint256(latestPrice);
        if (option.optionType == OptionType.Call) {
            require(option.strike <= currentPrice, "Current price is too low");
            profit = currentPrice.sub(option.strike).mul(option.amount).div(currentPrice);
        } else {
            require(option.strike >= currentPrice, "Current price is too high");
            profit = option.strike.sub(currentPrice).mul(option.amount).div(currentPrice);
        }
        if (profit > option.lockedAmount)
            profit = option.lockedAmount;
        pool.send(optionID, option.holder, profit);
    }
// Copyright (C) 2020 Hegic Protocol: GNU licence
```

## Answer Key
```solidity
        Option memory option = options[optionID];
        (, int latestPrice, , , ) = priceProvider.latestRoundData();
```

## Distractors
### 1.
```solidity
        Option storage option = options(optionID);
        (, int latestPrice, , , ) = priceProvider.latestRoundData();
```

### 2.
```solidity
        Option memory Option = options[optionID];
        (int latestPrice) = priceProvider.latestRoundData();
```

### 3.
```solidity
        Option storage option == options[optionID];
        (, uint latestPrice, , ) = priceProvider.latestRoundData();
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
