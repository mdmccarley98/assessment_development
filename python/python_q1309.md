# Python Containers dictionaries

## Item ID
1309

## Claim
Claim 2

## Claim Behavior (evidence)

[Accessing value in a nested Python dictionary](https://realpython.com/python-dicts/)

## Content Target
`dictionary`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem
Given the Python dictionary below, which option would print the following:
```
algebra 99 python
```

## Code Snippet (optional)

```python
data = {
    "students": {
        "Alice" : {
            "grades": [85, 99, 76],
            "absences": 1
        },
        "Pete": {
            "grades":[65, 98, 62],
            "absences": 3

        }
    },
    "teachers": {
        "Brown": {
            "classes": ["algebra", "trigonometry"]
        },
        "Patel": {
            "classes": ["physics", "chemistry"]
        }
    }
}
```

## Answer Key

```python
print(
    data["teachers"]["Brown"]["classes"][0],
    data.get("students").get("Alice").get("grades")[1],
    data["students"]["Pete"].get("favorite", "python")
)
```

## Distractors 
### 1.
```python
print(
    data["teachers"]["Brown"]["classes"][0],
    data.get("students").get("Alice").get("grades")[1],
    data.get("students.Pete").get("favorite") or "python"
)
```

### 2.
```python
print(
    data["teachers"]["Brown"]["classes"][0],
    data["students"]["Alice"]["grades"][1],
    data["students"]["Pete"]["favorite"] or "python"
)
```

### 3.
```python
print(
    data["teachers"]["Brown"]["classes"][0],
    data["students"]["Alice"]["grades"][1],
    "other" if data["students"]["Pete"]["favorite"] else "python"
)
```

## Common errors, misconceptions, or irrelevant information (optional)

* Using the syntax `value["not there"]` on a `dict` for a key that does not exist, throws a `KeyError`.
* The `dict.get(key, default)` function will return the default value if the key does not exist.
* the `dict.get()` function does not take a key path, so it looks for the key `students.Pete` which did not exist.

## Content Review

- Accuracy: ✅ 🔸 fixed grammar in stem, change "the Pete's" to "Pete's"
- Alignment: 🔸
  * This is more about array indexing by 0 than dictionaries.
  * I think the stem could say "grade of 98" without giving it away.
  * Also it's obvious that "Alice" wouldn't return Pete's grade.
  * Maybe using `dict.get()`  https://docs.python.org/3/library/stdtypes.html#dict.get would be better alignment

  * changed the distractors to use `get()` or access a key that does not exist
