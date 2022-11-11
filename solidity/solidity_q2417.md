# Calculate Spot Price

## Item ID
2417

## Claim
Claim 3

## Target Level
3

## Claim Behavior (evidence)
https://github.com/balancer-labs/balancer-core/blob/master/contracts/BMath.sol

## Content Target
- Calculate spot price

## Cognitive Model
- Use

## Item Type
Multiple choice

## Stem
The `calcSpotPrice` function is included below. It contains a bug. **Choose the option that will fix the bug.**

## Code Snippet (optional)
```
/******************************************************************************  
// calcSpotPrice                                                             //
// sP = spotPrice                                                            //
// bI = tokenBalanceIn                ( bI / wI )         1                  //
// bO = tokenBalanceOut         sP =  -----------  *  ----------             //
// wI = tokenWeightIn                 ( bO / wO )     ( 1 - sF )             //
// wO = tokenWeightOut                                                       //
// sF = swapFee                                                              //
******************************************************************************/
function calcSpotPrice(
    uint tokenBalanceIn,
    uint tokenWeightIn,
    uint tokenBalanceOut,
    uint tokenWeightOut,
    uint swapFee
)
    public pure
    returns (uint spotPrice)
{
    uint numer = bdiv(tokenBalanceIn, tokenWeightIn);
    uint denom = bdiv(tokenBalanceOut, tokenWeightOut);
    uint ratio = bmul(numer, denom);
    // uint public constant BONE = 10**18;
    uint scale = bdiv(BONE, bsub(BONE, swapFee));
    return  (spotPrice = bmul(ratio, scale));
}
// balancer.fi: GPL-3.0
```

## Answer Key
```
uint ratio = bmul(numer, denom);
```
should be corrected to:
```
uint ratio = bdiv(numer, denom);
```

## Distractors
### 1.
```
uint numer = bdiv(tokenBalanceIn, tokenWeightIn);
```
should be corrected to:
```
uint numer = bdiv(tokenBalanceIn, tokenBalanceOut);
```

### 2.
```
uint denom = bdiv(tokenBalanceOut, tokenWeightOut);
```
should be corrected to:
```
uint denom = bdiv(tokenBalanceOut, tokenWeightIn);
```

### 3.
```
uint scale = bdiv(BONE, bsub(BONE, swapFee));
```
should be corrected to:
```
uint scale = bmul(BONE, bsub(BONE, swapFee));
```

## Common errors, misconceptions, or irrelevant information:
Irrelevant information: The Balancer fork on the Fantom blockchain is called Beethoven-x: https://beets.fi/

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
