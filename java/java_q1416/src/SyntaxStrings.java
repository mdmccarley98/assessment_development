// Copyright (C) 2020 Triplebyte

public class SyntaxStrings {
    public static void main(String[] args) {
        String aHealthySnack = new String("apples");
        String myFavoriteSnack = new String("apples");
        if (aHealthySnack == myFavoriteSnack) {
            System.out.println("Your snack is healthy.");
        } else {
            System.out.println("Choose a healthier snack next time.");
        }
    }
}
