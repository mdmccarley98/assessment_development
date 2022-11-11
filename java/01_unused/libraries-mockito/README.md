# Mockito

## Item ID
java-libraries-mockito

## Claim
Claim 5: Candidate has familiarity with major frameworks or libraries associated with the language's major usages

## Claim Behavior (evidence)

* [Mockito](https://site.mockito.org/) - Mockito
* [spy](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html#spy-T-) - Mockito
* [mock](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html#mock-java.lang.Class-) - Mockito

## Content Target
Frameworks

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Mockito is commonly used alongside JUnit or TestNG when writing unit tests.  In Mockito terms, what is a "Spy"?

## Code Snippet (optional)


## Answer Key
Spies provide partial mocking by wrapping a copy of a *real* object instance. When the Spy is used, it will use the underlying implementation of any methods that are not stubbed.


## Distractors

### 1.
A Spy is a tool to analyze test failures and provide suggestions for fixing common classes of bugs.

### 2.
A Spy captures a particular method argument so that assertions can be made on it.

### 3.
A Spy fills out the dependencies of a class and injects mocked versions into a class for testing.


## Common errors, misconceptions, or irrelevant information (optional):

* Mocks and Spies are both [Test Doubles](https://martinfowler.com/bliki/TestDouble.html).
* In general, Spies should not be used when a Mock will suffice.

> Object oriented programming tackles complexity by dividing the complexity into separate, specific, SRPy objects. How does partial mock fit into this paradigm? Well, it just doesn't... Partial mock usually means that the complexity has been moved to a different method on the same object. In most cases, this is not the way you want to design your application.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
