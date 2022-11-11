# Go Domain Pat A Cake

## Item ID
go-domain-pat-a-cake

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)
> Sometimes, though, it's necessary to break out of a surrounding loop, not the switch, and in Go that can be accomplished by putting a label on the loop and "breaking" to that label. 
> - [Effective Go - Switch](https://golang.org/doc/effective_go.html#switch) - golang.org

## Content Target
* labels

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

The function `patACake` implements a children's nursery rhyme.

What is printed when the function is called?


## Code Snippet (optional)
```golang
const (
	Start = iota
	Roll
	Pat
	MarkWithAB
	PutInOven
)

func patACake() {
	step := Start
loop:
	for {
		fmt.Println(step)
		switch step {
		case Start:
			step = Roll
		case Roll:
			step = Pat
		case Pat:
			step = MarkWithAB
			break loop
		case MarkWithAB:
			step = PutInOven
		case PutInOven:
			fmt.Println("Baked")
			return
		}
	}
	fmt.Println("Unbaked", step)
}
```

## Answer Key
```
0
1
2
Unbaked 3
```

## Distractors
### 1
```
0
1
2
3
4
Baked
```

### 2
```
0
3
3
3
3
3
3
```
(repeating 3 forever)

### 3
```
Start
Roll
Pat
MarkWithAB
PutInOven
Baked
```

### 4
```
0
Unbaked 3
```

## Common errors, misconceptions, or irrelevant information:

In go, case statements do NOT fall through.

One of the main uses of labels is to give context to the break keyword inside a switch to specify which for loop should be broken.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

