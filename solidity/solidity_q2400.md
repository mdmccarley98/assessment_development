# NFT ERC721

## Item ID
2400

## Claim
Claim 1

## Target Level
4

## Claim Behavior (evidence)
NFT ERC721 token standard

## Content Target
ERC721 token standard characteristics

https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol

http://erc721.org/

## Cognitive Model
Comprehend

## Item Type
Multiple choice

## Stem
Below you will find a sample ERC721 contract.

Choose the answer that best describes the ERC721 standard.

## Code Snippet (optional)
```
/**
* @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including
* the Metadata extension, but not including the Enumerable extension, which is available separately as
* {ERC721Enumerable}.
*/
contract ERC721 is Context, ERC165, IERC721, IERC721Metadata {
    using Address for address;
    using Strings for uint256;

    // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping owner address to token count
    mapping(address => uint256) private _balances;

    // Mapping from token ID to approved address
    mapping(uint256 => address) private _tokenApprovals;

    // Mapping from owner to operator approvals
    mapping(address => mapping(address => bool)) private _operatorApprovals;

// openzeppelin.com: MIT License
```

## Answer Key
The ERC721 standard represents a class of unique tokens, whereas `mapping(uint256 => address) private _owners;` represents a mapping from a unique token ID to an owner address.

## Distractors
### 1.
ERC721 is an open standard describing how to build tokens on the Ethereum blockchain like the first Ether minted when Ethereum was launched.

### 2.
ERC721 tokens are suitable for collections of DeFi tokens. 

### 3.
In the above contract, if you use `string private _name;`, `string private _symbol;`, and the owner address of an already existing ERC20 token in `mapping(uint256 => address) private _owners;`, you can then convert any ERC20 token with the exact name into multiple new unique ERC721 tokens.

## Common errors, misconceptions, or irrelevant information:
- Common misconceptions: ERC721 non-fungible tokens “NFTs” are only suitable for minting and trading unique JPEGs on the blockchain.
  - Correct: An ERC721 can also represent a transferable asset, like bearer shares in the form of an NFT.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
