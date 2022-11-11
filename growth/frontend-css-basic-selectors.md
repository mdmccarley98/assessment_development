# Front-end: Using CSS to select nested elements

## Item ID
frontend-css-basic

## Claim
Claim #1: Understand the core syntax of the language itself.

## Claim Behavior (evidence)

* [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp) - w3schools

## Content Target
Basic selectors

## Cognitive Model
Use


## Item Type
Multiple Choice

## Stem

Which CSS selector will select the first character in the first paragraph of each article?  In the example, every capital 'C' should be selected.

## Code Snippet (optional)

```
<p>Introduction.</p>
<article>
    <h3>Article 1 title</h3>
    <p>Copy for article 1, paragraph 1</p>
    <p>Copy for article 1, paragraph 2</p>
</article>
<article>
    <h3>Article 2 title</h3>
    <p>Copy for article 2, paragraph 1</p>
    <p>Copy for article 2, paragraph 2</p>
</article>
```

## Answer Key

```
article p:first-of-type:first-letter
```

## Distractors

### 1.
```
article p:nth-child(1):first-letter
```

### 2.
```
article > p:first-of-type > character:first-letter
```

### 3.
```
article + p:first-of-type:first-letter
```


## Common errors, misconceptions, or irrelevant information (optional):

* The selector `p:nth-child(1)` can only apply if an element is both the first child of its parent and is a `p` element.
* There is no `character` selector in CSS.
* A selector with the form of `foo + bar` does not select for `bar` as a child element of `foo`. It selects any `bar` that immediately follows a `foo` element.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)