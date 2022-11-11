# Constructor 

## Item ID
2401

## Claim
Claim 1

## Target Level
5

## Claim Behavior (evidence)
DeFi vesting contract constructor

https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/drafts/TokenVesting.sol

lines: 49 - 62

## Content Target
constructor

## Cognitive Model
Use

## Item Type
Multiple choice

## Stem
The sample code is a constructor (with a missing signature) for a vesting contract that vests the balance of any ERC20 token to the beneficiary. The `beneficiary` is the address of the beneficiary to whom vested tokens are transferred. The `cliffDuration` is the duration in seconds of the cliff in which tokens will begin to vest. The `start` is the time (as Unix time) at which point vesting starts. The `duration` is the duration in seconds of the period the tokens will vest. `revocable` indicates whether the vesting is revocable or not.

Choose the correct constructor signature to complete the constructor as defined.

## Code Snippet (optional)
```
// missing constructor signature {
    require(beneficiary != address(0), "TokenVesting: beneficiary is the zero address");
    // solhint-disable-next-line max-line-length
    require(cliffDuration <= duration, "TokenVesting: cliff is longer than duration");
    require(duration > 0, "TokenVesting: duration is 0");
    // solhint-disable-next-line max-line-length
    require(start.add(duration) > block.timestamp, "TokenVesting: final time is before current time");

    _beneficiary = beneficiary;
    _revocable = revocable;
    _duration = duration;
    _cliff = start.add(cliffDuration);
    _start = start;
}
// openzeppelin.com: MIT License
```


## Answer Key
```
constructor (address beneficiary, uint256 start, uint256 cliffDuration, uint256 duration, bool revocable) public {
```

## Distractors
### 1.
```
constructor (address beneficiary, uint24 start, uint24 cliffDuration,  int24 duration, bool revocable) internal {
```

### 2.
```
constructor (address beneficiary, uint256 start, uint256 cliffDuration, uint256 duration, bool revocable) external {
```

### 3.
```
constructor (address beneficiary, int256 start, int256 cliffDuration,  int256 duration, bool revocable) private
```

## Common errors, misconceptions, or irrelevant information:
- Common error: Mixing up public and external

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
