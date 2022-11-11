# programmatic_problem_solving

## Item ID
564

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the value of the variable `tree` after the following code runs?

## Code Snippet (optional)
```ruby
def build_word_tree_from_sentences(sentence_list)
  root = {}
  sentence_list.each do |sentence|
    base = root
    sentence.split(' ').each do |word|
      base[word] ||= {}
      base = base[word]
    end
  end
  root
end
  
tree = build_word_tree_from_sentences(["Hello world", "Hello there"])
```

## Answer Key
`{"Hello"=>{"world"=>{}, "there"=>{}}}`

## Distractors

### 1.
`["Hello", ["world", "there"]]`

### 2.
`{"Hello"=>["world", "there"]}`

### 3.
`{"Hello"=>{"Hello world"=>{}, "Hello there"=>{}}}`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

