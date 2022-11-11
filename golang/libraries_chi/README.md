# Go Libraries Chi

## Item ID
go-libraries-chi

## Claim
5. Familiarity with major frameworks or libraries associated with the language’s major usages.

## Claim Behavior (evidence)
>     middleware := AllowContentEncoding("deflate", "gzip")
>     ...
>     router := chi.NewRouter()
>     router.Use(middleware)
> - [github go-chi/chi content_encoding_test.go](https://github.com/go-chi/chi/blob/master/middleware/content_encoding_test.go)

## Content Target
* package github.com/go-chi/chi

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

Using `go-chi/chi` how do you ensure all requests use `gzip` content encoding?

## Code Snippet (optional)


## Answer Key
```golang
router.Use(middleware.AllowContentEncoding("gzip"))
```

## Distractors

### 1.
```golang
r.Get("/", func(w http.ResponseWriter, r *http.Request) {
    if r.Header["Content-Encoding"] != "gzip" {
        return errors.New("invalid content encoding")
    }
    //...
})
```

### 2.
```golang
r.Get("/", func(w http.ResponseWriter, r *http.Request) {
    w.Header().Add("Content-Encoding", "gzip")
    //...
})
```

### 3.
```golang
router.AddHeader("Content-Encoding", "gzip")
```


## Common errors, misconceptions, or irrelevant information:

The chi middleware AllowContentEncoding validates the content-encoding, if the content length is greater than zero, and returns an appropriate 415 error code if it is invalid.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

