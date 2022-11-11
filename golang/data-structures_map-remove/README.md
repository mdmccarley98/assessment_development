# Go Data-Structures map remove

## Item ID
go-data-structures-map-remove

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
> To delete a map entry, use the delete built-in function, whose arguments are the map and the key to be deleted. It's safe to do this even if the key is already absent from the map.  
> `delete(timeZone, "PDT")  // Now on Standard Time`
> - [Effective Go - Maps](https://golang.org/doc/effective_go.html#maps) - golang.org

> `func delete(m map[Type]Type1, key Type)`  
> The delete built-in function deletes the element with the specified key (m[key]) from the map.
> - [builtin func delete](https://golang.org/pkg/builtin/#delete) - golang.org

## Content Target
map

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
How do you remove the item `i` from the map `m`?

## Code Snippet (optional)


## Answer Key
```
delete(m, i)
```

## Distractors

### 1.
```
delete m[i]
```

### 2.
```
m.remove(i)
```

### 3.
```
append(m[:i], m[i+1:])
```


## Common errors, misconceptions, or irrelevant information:

If the element does not exist in a map, the program continues without a panic.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

