# C➕➕ 4 Memory: leaks

## Item ID
1871

## Claim
-   Claim 3 (C++ tools, compiling and linking): Candidates know all the tools and instrumentation necessary to help during the development process as well as the process of compiling and linking.
> Understand memory leaks and how to diagnose and prevent them.

## Threshold Probabilities
[.15, .35, .65, .80]

## Claim Behavior (evidence)

### key
```
$ valgrind ./key
==3725== Memcheck, a memory error detector
==3725== Copyright (C) 2002-2015, and GNU GPL'd, by Julian Seward et al.
==3725== Using Valgrind-3.12.0.SVN and LibVEX; rerun with -h for copyright info
==3725== Command: ./key
==3725==
==3725== error calling PR_SET_PTRACER, vgdb might block
==3725==
==3725== HEAP SUMMARY:
==3725==     in use at exit: 0 bytes in 0 blocks
==3725==   total heap usage: 7 allocs, 7 frees, 72,732 bytes allocated
==3725==
==3725== All heap blocks were freed -- no leaks are possible
```
> no leaks are possible

[key.cpp](./key.cpp)

### 1.
```
$ valgrind ./distractor1
==3786== Memcheck, a memory error detector
==3786== Copyright (C) 2002-2015, and GNU GPL'd, by Julian Seward et al.
==3786== Using Valgrind-3.12.0.SVN and LibVEX; rerun with -h for copyright info
==3786== Command: ./distractor1
==3786==
==3786== error calling PR_SET_PTRACER, vgdb might block
==3786== 
==3786== HEAP SUMMARY:
==3786==     in use at exit: 4 bytes in 4 blocks
==3786==   total heap usage: 9 allocs, 5 frees, 72,804 bytes allocated
==3786==
==3786== LEAK SUMMARY:
==3786==    definitely lost: 4 bytes in 4 blocks
==3786==    indirectly lost: 0 bytes in 0 blocks
==3786==      possibly lost: 0 bytes in 0 blocks
==3786==    still reachable: 0 bytes in 0 blocks
==3786==         suppressed: 0 bytes in 0 blocks
```
> definitely lost: 4 bytes in 4 blocks
 
[distractor1.cpp](./distractor1.cpp)

### 2.
```
$ valgrind ./distractor2
==3787== Memcheck, a memory error detector
==3787== Copyright (C) 2002-2015, and GNU GPL'd, by Julian Seward et al.
==3787== Using Valgrind-3.12.0.SVN and LibVEX; rerun with -h for copyright info
==3787== Command: ./distractor2
==3787==
==3787== error calling PR_SET_PTRACER, vgdb might block
==3787== 
==3787== HEAP SUMMARY:
==3787==     in use at exit: 2 bytes in 2 blocks
==3787==   total heap usage: 7 allocs, 5 frees, 72,732 bytes allocated
==3787==
==3787== LEAK SUMMARY:
==3787==    definitely lost: 2 bytes in 2 blocks
==3787==    indirectly lost: 0 bytes in 0 blocks
==3787==      possibly lost: 0 bytes in 0 blocks
==3787==    still reachable: 0 bytes in 0 blocks
==3787==         suppressed: 0 bytes in 0 blocks
```
> definitely lost: 2 bytes in 2 blocks

[distractor2.cpp](./distractor2.cpp)

### 3.
```
$ valgrind ./distractor3
==3724== Memcheck, a memory error detector
==3724== Copyright (C) 2002-2015, and GNU GPL'd, by Julian Seward et al.
==3724== Using Valgrind-3.12.0.SVN and LibVEX; rerun with -h for copyright info
==3724== Command: ./distractor3
==3724==
==3724== error calling PR_SET_PTRACER, vgdb might block
==3724==
==3724== HEAP SUMMARY:
==3724==     in use at exit: 2 bytes in 2 blocks
==3724==   total heap usage: 7 allocs, 5 frees, 72,732 bytes allocated
==3724==
==3724== LEAK SUMMARY:
==3724==    definitely lost: 2 bytes in 2 blocks
==3724==    indirectly lost: 0 bytes in 0 blocks
==3724==      possibly lost: 0 bytes in 0 blocks
==3724==    still reachable: 0 bytes in 0 blocks
==3724==         suppressed: 0 bytes in 0 blocks
```
> definitely lost: 2 bytes in 2 blocks

[distractor3.cpp](./distractor3.cpp)


## Content Target
* memory leaks

## Cognitive Model
Use

## Item Type
* Multiple Choice

## Stem

After running `valgrind` on the following code it reports:
```
==3473== HEAP SUMMARY:
==3473==     in use at exit: 2 bytes in 2 blocks
==3473==   total heap usage: 7 allocs, 5 frees, 72,732 bytes allocated
==3473==
==3473== LEAK SUMMARY:
==3473==    definitely lost: 2 bytes in 2 blocks
==3473==    indirectly lost: 0 bytes in 0 blocks
==3473==      possibly lost: 0 bytes in 0 blocks
==3473==    still reachable: 0 bytes in 0 blocks
==3473==         suppressed: 0 bytes in 0 blocks
```

How do you fix it?

## Code Snippet (optional)
```cpp
class Cart {
public:
    virtual ~Cart() {
        for (auto* i : items) {
            delete i;
        }
    }
    bool add_to_basket(Item *item) {
        if (!item->is_available()) {
            return false;
        }
        items.push_back(item);
        return true;
    }
private:
    std::vector<Item *> items;
};

void add_wishlist(Cart &cart) {
    cart.add_to_basket(new Item{true});
    cart.add_to_basket(new Item{false});
    cart.add_to_basket(new Item{true});
    cart.add_to_basket(new Item{false});
}
```

## Answer Key

* Cart is not freeing unavailable items.

```cpp
class Cart {
public:
    virtual ~Cart() {
        for (auto *i : items) {
            delete i;
        }
    }

    bool add_to_basket(Item *item) {
        if (!item->is_available()) {
            delete item;
            return false;
        }
        items.push_back(item);
        return true;
    }

private:
    std::vector<Item *> items;
};
```


## Distractors
### 1.

* Changing `Cart::items` to `std::vector<shared_ptr<Item>>` and `items.push_back(std::make_shared<Item>(item))` will fix the issue.

```cpp
class Cart {
public:
    bool add_to_basket(Item *item) {
        if (!item->is_available()) {
            return false;
        }
        items.push_back(std::make_shared<Item>(item));
        return true;
    }
private:
    std::vector<std::shared_ptr<Item>> items;
};
```


### 2.

* Cart is trying to remove items from a vector as it iterates over the same vector.

```cpp
class Cart {
public:
    virtual ~Cart() {
        while (!items.empty()) {
            delete items.back();
            items.pop_back();
        }
    }

    bool add_to_basket(Item *item) {
        if (!item->is_available()) {
            return false;
        }
        items.push_back(item);
        return true;
    }

private:
    std::vector<Item *> items;
};
```


### 3.

* `Item *item` could be `nullptr` in `add_to_basket`.

```cpp
class Cart {
public:
    virtual ~Cart() {
        for (auto *i : items) {
            delete i;
        }
    }

    bool add_to_basket(Item *item) {
        if (item == nullptr || !item->is_available()) {
            return false;
        }
        items.push_back(item);
        return true;
    }

private:
    std::vector<Item *> items;
};
```


## Common errors, misconceptions, or irrelevant information:

Using a `vector<shared_ptr<Item>>` is a good idea, but it would be even better to use a `shared_ptr` in the `add_to_basket` function arguments.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
