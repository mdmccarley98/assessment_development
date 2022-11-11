# View Holders

## Item ID
318

## Claim
Claim 1

## Claim Behavior (evidence)
NA

## Content Target
android

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is wrong with this implementation of an `Adapter`?

## Code Snippet (optional)
```java
class MyAdapter extends BaseAdapter {
    
    @Override
    public View getView(int i, View view, ViewGroup parent) {
        MyData data = (MyData) getItem(i);

        if (view == null) {
            view = createView(parent);
        }

        TextView viewTitle = (TextView) view.findViewById(R.id.item_title);
        TextView viewSummary = (TextView) view.findViewById(R.id.item_summary);

        ViewHolder viewHolder = new ViewHolder();
        viewHolder.title = viewTitle;
        viewHolder.summary = viewSummary;
        view.setTag(viewHolder);

        viewHolder.title.setText(data.getTitle());
        viewHolder.summary.setText(data.getSummary());

        return view;
    }
    
    // ...
}
```

## Answer Key
This code uses `viewHolder` in the wrong way. It should create new `viewHolder` instance only if it created a new view.

## Distractors

### 1.
There is no need to check if the `view` parameter is `null`. It would never be `null`.

### 2.
This code should create a new view, and not reuse the view instance passed in.

### 3.
Everything works fine. The `viewHolder` improves the performance of this adapter.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

