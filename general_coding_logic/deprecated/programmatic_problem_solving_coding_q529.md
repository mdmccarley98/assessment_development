# programmatic_problem_solving

## Item ID
q529

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which of the last four variables contains the array [“chain”, “deo”, “grills”] as a value?

## Code Snippet (optional)
```javascript
const getItemsOrderedByCustomer = customer => (...orders) => {
   return orders.filter(order => order.customerId === customer.id)
          .map(order => order.items)
          .reduce( (acc, cur) => [...acc, ...cur], []);
}
let customer = {
  name: "fiddy",
  id: 5
};
const order1 = {id: 1, customerId: 1, items: ["belt"]};
const order2 = {id: 2, customerId: 5, items: ["chain", "deo"]};
const order3 = {id: 3, customerId: 5, items: ["grills"]};
const order4 = {id: 4, customerId: 2, items: ["pants"]};

const w = getItemsOrderedByCustomer(customer)(order1, order2, order3, order4);
const x = getItemsOrderedByCustomer(customer)([order1, order2, order3, order4]);
const y = getItemsOrderedByCustomer(customer, order1, order2, order3, order4);
const z = getItemsOrderedByCustomer(customer)(order1, order2, order4);
```

## Answer Key
w

## Distractors

### 1.
x

### 2.
y

### 3.
z

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

