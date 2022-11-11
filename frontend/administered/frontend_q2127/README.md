# Basic Promise Usage

## Item ID
2127

## Claim
Claim 2: data

## Claim Behavior (evidence)
[Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Content Target
Promises

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
For a GET request of "https://example.com/greeting" your application's server returns a successful response with the body: 
```json
{ "message": "Hi!" }
```

Which of the following scripts could you embed in a `<body>` element to successfully log the message property in the response?

## Code Snippet (optional)

## Answer Key
```html
<script>
    fetch('https://example.com/greeting')
        .then(response => response.json())
        .then(data => console.log(data.message))
</script>
```

## Distractors
### 1.
```html
<script>
    const result = await fetch('https://example.com/greeting')
    const data = await result.json()
    console.log(data.message)
</script>
```

### 2.
```html
<script>
    const result = fetch('https://example.com/greeting')
    const data = result.json()
    console.log(data.message)
</script>
```

### 3.
```html
<script>
    fetch('https://example.com/greeting', (data) => {
        console.log(data.message)
    })
</script>
```

## Common errors, misconceptions, or irrelevant information:
* `fetch()` returns a Promise of a Response.
* `await` cannot be used outside an `async` function.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
