# programmatic_problem_solving

## Item ID
q545

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What's wrong with this code:

## Code Snippet (optional)
```python
# returns the content of all div tags on an HTML page as a list
def get_all_div_tag_contents(html_text):
    result = []
    html_tag_regex = "<([\w]+)([^>]*?)(([\s]*\/>)" + \
        "|(\>((([^\<]*?|<\!\-\-.*?\-\->)|(?R))*)\<\/\1[\s]*\>))"
    for tag_tuple in re.findall(html_tag_regex, html_text):
        result.append(tag_tuple[5])
    return result
```

## Answer Key
It's impossible to parse an arbitrary HTML page with regular expressions. This code should be refactored to use a proper HTML parser.

## Distractors

### 1.
findall() returns a list, while finditer() returns a iterator. This could be a huge performance difference if you're going to handle big HTML pages. It's better to refactor this code to use finditer.

### 2.
There's a missing closing bracket in the regex, HTML tags won't get matched with this regex.

### 3.
tag_tuple[5] may throw an exception if tag_tuple has less than 6 elements, which may happen if div doesn't have any content.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

