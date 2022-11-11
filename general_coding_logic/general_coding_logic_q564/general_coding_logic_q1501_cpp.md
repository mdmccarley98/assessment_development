# programmatic_problem_solving

## Item ID
1501

## Claim
1

## Claim Behavior (evidence)
```cpp
#include <functional>
#include <iostream>
#include <map>
#include <memory>
#include <random>
#include <tuple>
#include <vector>
#include <sstream>

typedef std::map<std::string, std::shared_ptr<void>> M;
typedef std::vector<std::string> S;

void build_word_tree_from_sentences(const S& sentence_list, M& root)
{
    for(const auto& sentence : sentence_list) {
        std::string word;
        std::stringstream ss(sentence);
        M* base = &root;
        while (ss >> word) {
            auto found = base->find(word);
            if (base->find(word) == base->end()) {
                base->insert(std::make_pair(word, std::make_shared<M>()));
            }
            auto b = base->find(word)->second;
            base = std::static_pointer_cast<M>(b).get();
        }
    }
}


void print_m(M& parent)
{
    for (auto& pair : parent) {
        std::cout << pair.first << ": {";
        auto child = std::static_pointer_cast<M>(pair.second);
        print_m(*child);
        std::cout << "} ";
    }
}


int main(int argc, char** argv)
{
    S sentence_list = {"Hello world", "Hello there"};
    M root;
    build_word_tree_from_sentences(sentence_list, root);

    print_m(root);
    std::cout << std::endl;
}
```
```
Hello: {there: {} world: {} }
```

## Threshold Probabilities
[.40, .60, .80, .95]

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the value of the variable `tree` after the following code runs?

## Code Snippet (optional)
```cpp
typedef std::map<std::string, std::shared_ptr<void>> M;
typedef std::vector<std::string> S;

void build_word_tree_from_sentences(const S& sentence_list, M& root)
{
    for(const auto& sentence : sentence_list) {
        std::string word;
        std::stringstream ss(sentence);
        M* base = &root;
        while (ss >> word) {
            auto found = base->find(word);
            if (base->find(word) == base->end()) {
                base->insert(std::make_pair(word, std::make_shared<M>()));
            }
            auto b = base->find(word)->second;
            base = std::static_pointer_cast<M>(b).get();
        }
    }
}

int main(int argc, char** argv)
{
    S sentence_list = {"Hello world", "Hello there"};
    M tree;
    build_word_tree_from_sentences(sentence_list, tree);
}
```

## Answer Key
```cpp
map {"Hello": map {"world": map {}, "there": map {}}}
```

## Distractors

### 1.
```cpp
vector {"Hello", vector {"world", "there"}}
```

### 2.
```cpp
map {"Hello": vector {"world", "there"}}
```

### 3.
```cpp
map {"Hello": map {"Hello world": map {}, "Hello there": map {}}}
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

