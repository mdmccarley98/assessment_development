# Java Libraries Gson

## Item ID
1426

## Claim
Claim 2: libraries_frameworks

## Claim Behavior (evidence)
Gson User Guide
https://github.com/google/gson/blob/master/UserGuide.md

com.google.code.gson.Gson
https://www.javadoc.io/doc/com.google.code.gson/gson/2.8.5/com/google/gson/Gson.html

com.google.code.gson.FieldNamingPolicy
https://www.javadoc.io/doc/com.google.code.gson/gson/2.8.5/com/google/gson/FieldNamingPolicy.html

## Cognitive Model
* Comprehend
* Use

## Item Type
Multiple Choice

## Stem
You're writing a food tracking app. 

The API you are using fills a string named `jsonOriginal` with the following json:
```json
{
  "name": "Potato Chips",
  "calories": 120,
  "price": "3.29",
  "price_per_unit": "3.29",
  "weight_oz": "6.25"
}
```
 
You want to use the Gson json serialization library.
Gson has a few features that help with naming fields, here's some relevant text from their java docs:

> The default field naming policy for the output Json is same as in Java. So, a Java class field versionNumber will be output as "versionNumber" in Json.
> -- com.google.code.gson.Gson docs

Here is another doc that will help:
> LOWER_CASE_WITH_UNDERSCORES
> 
> Using this naming policy with Gson will modify the Java Field name from its camel cased form to a lower case field name where each word is separated by an underscore (_).
>
> -- com.google.code.gson.FieldNamingPolicy docs

This function deserializes and serializes json repeatedly using different configurations.

```java
String serializeDeserialize(Gson gson, String json) {
    FoodItem foodItem = gson.fromJson(json, FoodItem.class);
    return gson.toJson(foodItem);
}
```

Looking at the `FoodItem` class below, keep note of the case, and annotations on all the fields.

```java
class FoodItem {
    private final String name;

    private Integer Calories;

    public String price;

    public String pricePerUnit;

    @SerializedName("weight_oz")
    float weightOz;

    FoodItem() {
        name = "";
    }
}
```

This program uses different Gson configurations to serialize and deserialize the objects:

```java
        Gson gsonLowerUnderscores = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES)
                .create();
        String jsonLowerUnderscores = serializeDeserialize(gsonLowerUnderscores, jsonOriginal);

        Gson gsonNormal = new GsonBuilder().create();
        String jsonNormal = serializeDeserialize(gsonNormal, jsonLowerUnderscores);

        FoodItem finalFoodItem = gsonNormal.fromJson(jsonNormal, FoodItem.class);
```

Which fields survive the process in `finalFoodItem`?

## Code Snippet

## Answer Key
```java
FoodItem {
    name: "Potato Chips",
    Calories: null,
    price: "3.29",
    pricePerUnit: null,
    weightOz: 6.25
}
```

## Distractors
### 1.
```java
FoodItem {
    name: "",
    Calories: null,
    price: "3.29",
    pricePerUnit: null,
    weightOz: 6.25
}
```

### 2.
```java
FoodItem {
    name: "Potato Chips",
    Calories: 120,
    price: "3.29",
    pricePerUnit: null,
    weightOz: 6.25
}
```

### 3.
```java
FoodItem {
    name: "",
    Calories: null,
    price: "3.29",
    pricePerUnit: null,
    weightOz: 0.0
}
```

## Common errors, misconceptions, or irrelevant information (optional):

* After the first `serializeDeserialize` the json survives completely.
* The private `name` field survives, because Gson is capable of creating an object with private and package-private fields without calling the constructor.
```json
{
  "name": "Potato Chips",
  "calories": 120,
  "price": "3.29",
  "price_per_unit": "3.29",
  "weight_oz": 6.25
}
```

* After the second `serializeDeserialize` two fields get dropped.
    * `Calories` is dropped because the case does not match.
    * `pricePerUnit` is dropped because the underscores and case do not match:
* `weightOz` survives because it is explicitly handled by `@SerializedName("weight_oz")`
```json
{
  "name": "Potato Chips",
  "price": "3.29",
  "weight_oz": 6.25
}
```



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

