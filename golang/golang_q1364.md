## Item ID
1364

## Claim 2

Candidate is able to manipulate the language’s container objects in whatever form they take

## Claim Behavior (evidence)

- slices https://tour.golang.org/moretypes/10

## Cognitive Model

- Comprehend

## Item Type

Multiple Choice

## Stems

What is the result of the following code?

## Code Snippet (optional)

```go
	birds := []string{
		"Osprey",
		"Stork",
		"Owl",
	}
	fish := []string {
		"Shark",
		"Salmon",
	}
	var animals []string
	animals = fish
	animals = append(animals, birds[:1]...)

	fish[1] = "Dolphin"

	fmt.Print(animals)
```

## Answer Key

- [Shark Salmon Osprey]

## Distractors

- [Shark Salmon Osprey Stork]
- [Shark Dolphin Osprey]
- [Shark Dolphin Osprey Stork]

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
