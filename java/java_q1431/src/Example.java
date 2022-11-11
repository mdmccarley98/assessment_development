// Copyright (C) 2020 Triplebyte

enum Team {
    ROCK,
    PAPER,
    SCISSORS;

    Boolean winsAgainst(Team opponent) {
        switch (this) {
            case ROCK:
                switch (opponent) {
                    case ROCK: return null;
                    case PAPER: return false;
                    case SCISSORS: return true;
                }
            case PAPER:
                switch (opponent) {
                    case ROCK: return true;
                    case PAPER: return null;
                    case SCISSORS: return false;
                }
            case SCISSORS:
                switch (opponent) {
                    case ROCK: return false;
                    case PAPER: return true;
                    case SCISSORS: return null;
                }
        }
        return null;
    }
}

public class Example {
    public static void main(String[] args) {
        for (Team a : Team.values()) {
            for (Team b : Team.values()) {
                System.out.println(a + " wins against " + b + ": " + a.winsAgainst(b));
            }
        }
    }
}

