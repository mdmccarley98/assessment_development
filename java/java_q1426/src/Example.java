// Copyright (C) 2020 Triplebyte

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.annotations.SerializedName;

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

    @Override
    public String toString() {
        return String.format("{\n" +
                "\t\"name\": \"%s\",\n" +
                "\t\"Calories\": %d,\n" +
                "\t\"price\": \"%s\",\n" +
                "\t\"pricePerUnit\": \"%s\",\n" +
                "\t\"weightOz\": %s\n" +
                "}", name, Calories, price, pricePerUnit, weightOz);
    }
}

public class Example {
    public static void main(String[] args) {
        String jsonOriginal = "{" +
                "  \"name\": \"Potato Chips\"," +
                "  \"calories\": 120," +
                "  \"price\": \"3.29\"," +
                "  \"price_per_unit\": \"3.29\"," +
                "  \"weight_oz\": \"6.25\"" +
                "}";

        Gson gsonLowerUnderscores = new GsonBuilder()
                // LOWER_CASE_WITH_UNDERSCORES
                // Using this naming policy with Gson will modify the Java Field name from its camel cased form to a lower case field name where each word is separated by an underscore (_).
                // -- com.google.code.gson.FieldNamingPolicy docs
                .setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES)
                .create();
        String jsonLowerUnderscores = serializeDeserialize(gsonLowerUnderscores, jsonOriginal);
        System.out.println(jsonLowerUnderscores);

        // The default field naming policy for the output Json is same as in Java. So, a Java class field versionNumber will be output as "versionNumber" in Json.
        // -- com.google.code.gson.Gson docs
        Gson gsonNormal = new GsonBuilder().create();
        String jsonNormal = serializeDeserialize(gsonNormal, jsonLowerUnderscores);
        System.out.println(jsonNormal);

        FoodItem finalFoodItem = gsonNormal.fromJson(jsonNormal, FoodItem.class);
        System.out.println(finalFoodItem);
    }

    static String serializeDeserialize(Gson gson, String json) {
        FoodItem foodItem = gson.fromJson(json, FoodItem.class);
        return gson.toJson(foodItem);
    }
}
