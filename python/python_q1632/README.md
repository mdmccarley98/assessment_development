# Python Features async/await

## Item ID
1632

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
>     async def sleep():
>         print(f'Time: {time.time() - start:.2f}')
>         await asyncio.sleep(1)
> -- [Simplest async/await example](https://stackoverflow.com/a/53420574/92584) stackoverflow / @Levon

-- [pep-0492](https://www.python.org/dev/peps/pep-0492/) python pep 0492

## Content Target
async/await

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

The following program takes 5 seconds to complete.

How can you change it to take only 1 second?

## Code Snippet (optional)
```python
import asyncio
import time

async def calculate():
    time.sleep(1)

def main():
    loop = asyncio.get_event_loop()
    tasks = []
    for _ in range(5):
        tasks.append(loop.create_task(calculate()))
    loop.run_until_complete(asyncio.wait(tasks))

if __name__ == '__main__':
    main()
```

## Answer Key
change `time.sleep` to `await asyncio.sleep`

```diff
 
 async def calculate():
-    time.sleep(1)
+    await asyncio.sleep(1)
 
```

## Distractors

### 1.
add `async` in front of `main`

```diff
 
-def main():
+async def main():
     loop = asyncio.get_event_loop()
```

### 2.
add `await` in front of `calculate()`

```diff
     for _ in range(5):
-        tasks.append(loop.create_task(calculate()))
+        tasks.append(loop.create_task(await calculate()))
     loop.run_until_complete(asyncio.wait(tasks))
```

### 3.
add `await` in front of `loop.run_until_complete(asyncio.wait(tasks))`

```diff
     for _ in range(5):
         tasks.append(loop.create_task(calculate()))
-    loop.run_until_complete(asyncio.wait(tasks))
+    await loop.run_until_complete(asyncio.wait(tasks))
```


## Common errors, misconceptions, or irrelevant information:

Inside an `async` function you should `await` something to tell python where it can interrupt execution.

`async`/`await` has been available since Python 3.5 in 2015.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

