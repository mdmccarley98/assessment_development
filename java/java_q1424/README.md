# Java Standard Library Regular Expressions

## Item ID
1424

## Claim
Claim 2: libraries_frameworks

## Claim Behavior (evidence)
Lesson: Regular Expressions
https://docs.oracle.com/javase/tutorial/essential/regex/

Package java.util.regex
https://docs.oracle.com/javase/7/docs/api/java/util/regex/package-summary.html#package_description

java.util.regex.Matcher
https://docs.oracle.com/javase/7/docs/api/java/util/regex/Matcher.html

## Cognitive Model
* Comprehend
* Use

## Item Type
Multiple Choice

## Stem
You are working at a company that wants to analyze different languages.
As an example, they want you to make a program that looks for how many times "dolor" is used in the latin "lorem ipsum"
text, and provide a little context around each word.

The regular expression pattern: `.{0,9}(dolor).{0,9}` will find "dolor" and 0 to 9 characters of context before and after it.

Choose the answer that uses the Java `java.util.regex` API to find all 4 matches and prints the following:

```
Found dolor at 12 "em ipsum dolor sit amet"
Found dolor at 103 "abore et dolore magna a"
Found dolor at 248 "te irure dolor in repre"
Found dolor at 302 "e cillum dolore eu fugi"
```

Complete the missing code below.

## Code Snippet
```java
public class Example {
    public static void main(String[] args) {
        String loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation " +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in " +
                "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
                "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        String term = "dolor";
        String searchPattern = String.format(".{0,9}(%s).{0,9}", term);

        // Complete the missing code here
    }
}
```

## Answer Key
```java
        Pattern pattern = Pattern.compile(searchPattern, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(loremIpsum);
        while (matcher.find()) {
            System.out.format("Found %s at %d \"%s\"\n", matcher.group(1), matcher.start(1), matcher.group());
        }
```


## Distractors
### 1.
```java
        int idx = 0;
        for(String word: loremIpsum.split(searchPattern)) {
            int before = Math.max(idx - 9, 0);
            int after = Math.min(idx + word.length() + 9, loremIpsum.length());
            idx += word.length() + 1;
            System.out.format("Found %s at %d \"%s\"\n", word, idx, loremIpsum.substring(before, after));
        }
```

### 2.
```java
        for (int i = 0; i < loremIpsum.length() - 1; i++) {
            for (int j = i + 1; j < loremIpsum.length(); j++) {
                String match = loremIpsum.substring(i, j);
                if (match.matches(searchPattern)) {
                    int start = Math.max(i - 9, 0);
                    int end = Math.max(j + 9, loremIpsum.length());
                    System.out.format("Found %s at %d \"%s\"\n", match, i, loremIpsum.substring(start, end));
                }
            }
        }
```

### 3.
```java
        Regex regex = new Regex(searchPattern);
        Matcher matcher = regex.matcher(loremIpsum.toCharArray());
        for (Region region: matcher.getRegion()) {
            System.out.format("Found %s at %d \"%s\"\n", term, region.beg, region.end);
        }
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
`String.split` takes a regex pattern, but returns the words in-between the matches.
This code is starting to build it's own Regex.
It prints the following:
```
Found , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l at 73 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
Found liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis au at 196 "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu"
Found henderit in voluptate velit ess at 228 "ris nisi ut aliquip ex ea commodo consequat. Duis"
Found at nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. at 358 "o consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat"
```

### 2.
`String.matches` takes a regex pattern, but it only returns true or false.
It doesn't provide the other information `java.util.regex.Matcher` provides, like the starting index.

This code is starting to build it's own Regex.
It incorrectly prints 400 matches instead of the correct 4 matches.
It's also doing more work than the `java.util.regex` package would be doing.

### 3.
This does not use the `java.util.regex` API.
It almost matches the Java Nashorn JavaScript Regex API.
One problem is Nashorn's` matcher.getRegion()` API does not return an iterator.

It's probably possible to use it, but the Nashorn Engine is for interpreting JavaScript code in a Java application.
Not writing Java in a Java application.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

