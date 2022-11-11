// Copyright (C) 2020 Triplebyte

import java.util.HashSet;

class Question {
    Integer number;
    Question(Integer number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return number.toString();
    }
}

class Example {
    public static void main(String[] args){
        System.out.println("Numbers:");
        HashSet<Integer> numbers = new HashSet<>();
        numbers.add(2);
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.forEach(System.out::println);

        System.out.println("\nQuestions:");
        HashSet<Question> questions = new HashSet<>();
        questions.add(new Question(2));
        questions.add(new Question(1));
        questions.add(new Question(2));
        questions.add(new Question(3));
        questions.forEach(System.out::println);
    }
}
