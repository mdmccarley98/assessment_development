# programmatic_problem_solving

## Item ID
1532

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What does the following code output?

## Code Snippet (optional)
```java
  public static void main(String[] args) throws InterruptedException {
    BlockingQueue<Integer> q = new LinkedBlockingQueue<>();

    Arrays.asList(3, 2, 1).forEach((d) -> {
      new Thread(() -> {
        try {
          Thread.sleep(d * 1000);
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
        q.add(d);
      }).start();
    });

    System.out.println(q.take());
  }
```

## Answer Key
`1`

## Distractors

### 1.
`3`

### 2.
`[3, 2, 1]`

### 3.
`[1, 2, 3]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

