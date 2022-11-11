## Item ID
1379

## Claim 5

Candidate has familiarity with major frameworks or libraries associated with the language's major usages

## Claim Behavior (evidence)

## Cognitive Model

- Us

## Item Type

Multiple Choice

## Stem

Given the following signature for the gin router POST method and HandlerFunc,
what is the correct way to write a post route using the Wrapper func?

## Code Snippet (optional)

```go
// POST function signature
func (group *RouterGroup) POST(relativePath string, handlers ...HandlerFunc) IRoutes
// HandlerFunc
type HandlerFunc func(*Context)

// Wrapper Func
func Wrapper() gin.HandlerFunc {
    return func(c *gin.Context) {
        // ...
    }
}

func main() {
  // create router group
  r := gin.Default()

  // post route to /status
  // ** code here **

  // listen router on port 8080
  r.Run(":8080")
}
```

## Answer Key

- `r.POST("/status", Wrapper())`

## Distractors

- `r.POST("/status", Wrapper)`
- `r.POST("/status", ...Wrapper())`
- `r.POST("/status", Wrapper()...)`

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
