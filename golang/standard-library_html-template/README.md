# Go Standard Library html/template

## Item ID
go-standard-library-html-template

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
> HTML templates treat data values as plain text which should be encoded so they can be safely embedded in an HTML document. The escaping is contextual, so actions can appear within JavaScript, CSS, and URI contexts.
> 
> The security model used by this package assumes that template authors are trusted, while Execute's data parameter is not.
> ...
> the contextual autoescaping in html/template ... produces safe, escaped HTML output
> - [Package html/template](https://golang.org/pkg/html/template/#hdr-Introduction) - golang.org


## Content Target
* html/template

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

You are writing an program that generates HTML using the "html/template" package.

What is the output of this code?

## Code Snippet (optional)
```golang
var t *template.Template
var err error
if t, err = template.New("site").Parse(`{{define "body"}}Hello {{.}}{{end}}`); err != nil {
    fmt.Println(err)
    return
}
if err := t.ExecuteTemplate(os.Stdout, "body", "<script>alert('Hello JS')</script>"); err != nil {
    fmt.Println(err)
}
```

## Answer Key
```
Hello &lt;script&gt;alert(&#39;Hello JS&#39;)&lt;/script&gt;
```


## Distractors

### 1.
```
Hello <script>alert('Hello JS')</script>
```

### 2.
```
template: site:1: unexpected "body" in define clause
```

### 3.
```
html/template: "body" is undefined
```


## Common errors, misconceptions, or irrelevant information:

The "html/template" package auto-escapes, but the "text/template" package does not.  This code uses the "html/template" package.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

