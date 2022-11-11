# Libraries Python pandas DataFrame

## Item ID
1325

## Claim

Claim 5

## Claim Behavior (evidence)

[Creating a pandas dataframe.](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html)

## Content Target
`pandas`

## Cognitive Model 

Recall or Comprehension

## Item Type
Multiple choice

## Stem
Will this data produce a valid pandas dataframe? 

If no why not and if yes what will the dataframe look like?

## Code Snippet (optional)

```python
import pandas as pd
data = {
    "a": [0, 1, 2.5],
    "b": ["apple", "pear", False],
    "c": [True, "banana"]
}
df = pd.DataFrame(data)
```

## Answer Key

No it will not produce a valid pandas dataframe because the arrays must be the same length.

## Distractors 
### 1.

Yes it will produce a valid dataframe and it will look like: 

<table>
    <thead>
        <tr>
            <th></th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>0.0</td>
            <td>"apple"</td>
            <td>True</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1.0</td>
            <td>"pear"</td>
            <td>"banana"</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2.5</td>
            <td>False</td>
            <td>NaN</td>
        </tr>
    </tbody>
</table>

### 2.

No it will not produce a valid pandas dataframe because `data["b"]` and `data["c"]` contain multiple data types.

### 3.

Yes it will produce a valid dataframe and it will look like: 

<table>
    <thead>
        <tr>
            <th></th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>0.0</td>
            <td>1.0</td>
            <td>2.5</td>
        </tr>
        <tr>
            <td>1</td>
            <td>"apple"</td>
            <td>"pear"</td>
            <td>False</td>
        </tr>
        <tr>
            <td>2</td>
            <td>True</td>
            <td>"banana"</td>
            <td>NaN</td>
        </tr>
    </tbody>
</table>

## Common errors, misconceptions, or irrelevant information (optional)

For a dictionary of lists to be a valid dataframe the each list must have the same length, but the datatype in each list can differ.
```
ValueError: arrays must all be same length
```

## Content Review

- Accuracy: ✅
    * typo in distractor 2 "datafram" -> "dataframe"
    * added an index column to the left of the distractors
    * converted numbers from an integer to real number like pandas does in a successful situation
- Alignment: ✅

* fixed `<code>` formatting to ` ```python `
* tested with `pandas==1.1.2`
