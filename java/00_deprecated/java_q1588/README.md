# Java - XML Processing

## Item ID
1588

## Claim
Claim 6: Candidates are able to complete everyday coding tasks that relate to the language’s core features

## Claim Behavior (evidence)
* [When to use DOM](https://docs.oracle.com/javase/tutorial/jaxp/dom/when.html) - Oracle
* [When to use SAX](https://docs.oracle.com/javase/tutorial/jaxp/sax/when.html) - Oracle
* [Using the Streaming API for XML (StAX)](https://docs.oracle.com/cd/E13222_01/wls/docs92/xml/stax.html) - Oracle

## Content Target
XML Processing

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Suppose you are writing a service that receives an XML file, validates that it conforms to a schema, and then modifies the same xml file using predefined rules.

Which of the following XML parsing technologies should you use when memory is not a constraint ?

## Code Snippet (optional)

## Answer Key
A DOM-based parser, like `javax.xml.parsers.DocumentBuilder` or dom4j

## Distractors
### 1.
A SAX-based parser, like `javax.xml.parsers.SAXParser`

### 2.
A StAX-based parser, like `javax.xml.stream.XMLStreamReader`

### 3.
A JSON-based parser, like Gson or org.json

## Common errors, misconceptions, or irrelevant information (optional):
* Out of the box, Java offers multiple solutions for parsing and processing XML.
* When you need to modify an XML structure, an in-memory structure makes more sense. DOM is one such model.
* SAX and StAX-based parsers do not hold the entire document in memory. This is good for performance, but makes some types of processing difficult or impossible.
* In order to validate a full document schema and to modify the document, an entire document must be loaded into memory. So DOM-based parsing is required.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
