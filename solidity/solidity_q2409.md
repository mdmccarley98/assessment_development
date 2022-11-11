# Poolcreation in decentralized exchange

## Item ID
2409

## Claim
Claim 3

## Target Level
5

## Claim Behavior (evidence)

https://etherscan.io/address/0xA5bf2ddF098bb0Ef6d120C98217dD6B141c74EE0#code

BasePoolFactory.sol

Lines: 28 - 61


## Content Target
Poolcreation in decentralized exchange

## Cognitive Model
Use

## Item Type
Multiple choice

## Stem
Below is an abstract contract that creates a pool and which contains two bugs. Choose the option that will fix the bugs.

## Code Snippet (optional)
```solidity
abstract contract PoolFactory {
    IVault private immutable _vault;
    mapping(address => bool) private _isPoolFromFactory;

    event PoolCreated(address indexed pool);

    constructor(IVault vault) {
        _vault = vault;
    }

    /**
     * @dev Returns the Vault's address.
     */
    function getBalance() public view returns (IVault) {
        return _balance;
    }

    /**
     * @dev Returns true if `pool` was created by this factory.
     */
    function isPoolFromFactory(address pool) external view returns (bool) {
        return _isPoolFromFactory[pool];
    }

    /**
     * @dev Registers a new created pool.
     *
     * Emits a `PoolCreated` event.
     */
    function _register(address pool) internal {
        _isPoolFromFactory[pool] = true;
        emit PoolCreated(pool);
    }
}
// balancer.fi: MIT License
```

## Answer Key
```
function getBalance() public view returns (IVault) {
    return _balance;
```
should be corrected to:
```
function getVault() public view returns (IVault) {
    return _vault;
```

## Distractors
### 1.
```
function _register(address pool) internal {
    _isPoolFromFactory[pool] = true;
    emit PoolCreated(pool);
```
should be corrected to:
```
function _register(address pool) internal {
    _isPoolFromFactory(pool) == true;
    emit PoolCreated(pool);
```

### 2.
```
function isPoolFromFactory(address pool) external view returns (bool) {
    return _isPoolFromFactory[pool];
```
should be corrected to:
```
function isPoolFromFactory(address pool) external view returns {
    returns _isPoolFromFactory[pool];
```

### 3.
```
constructor(IVault vault) {
    _vault = vault;
}
```
should be corrected to:
```
constructor(IVault adjustedvault) {
    vault = adjustedvault;
}
```

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
