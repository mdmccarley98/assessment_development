// Copyright (C) 2020 Triplebyte

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Example {
    public static void main(String[] args) {
        String loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation " +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in " +
                "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
                "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        String term = "dolor";
        String searchPattern = String.format(".{0,9}(%s).{0,9}", term);

        key(loremIpsum, term, searchPattern);
//        distractor1(loremIpsum, term, searchPattern);
//        distractor2(loremIpsum, term, searchPattern);
//        distractor3(loremIpsum, term, searchPattern);
    }

    public static void key(String loremIpsum, String term, String searchPattern) {

        Pattern pattern = Pattern.compile(searchPattern, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(loremIpsum);
        while (matcher.find()) {
            System.out.format("Found %s at %d \"%s\"\n", matcher.group(1), matcher.start(1), matcher.group());
        }

    }
    public static void distractor1(String loremIpsum, String term, String searchPattern) {
        int idx = 0;
        for(String word: loremIpsum.split(searchPattern)) {
            int before = Math.max(idx - 9, 0);
            int after = Math.min(idx + word.length() + 9, loremIpsum.length());
            idx += word.length() + 1;
            System.out.format("Found %s at %d \"%s\"\n", word, idx, loremIpsum.substring(before, after));
        }
    }
    public static void distractor2(String loremIpsum, String term, String searchPattern) {
        int totalMatches = 0;

        for (int i = 0; i < loremIpsum.length() - 1; i++) {
            for (int j = i + 1; j < loremIpsum.length(); j++) {
                String match = loremIpsum.substring(i, j);
                if (match.matches(searchPattern)) {
                    int start = Math.max(i - 9, 0);
                    int end = Math.min(j + 9, loremIpsum.length());
                    System.out.format("Found %s at %d \"%s\"\n", match, i, loremIpsum.substring(start, end));
                    totalMatches++;
                }
            }
        }

        System.out.println("Found " + totalMatches + " total matches");
    }
    public static void distractor3(String loremIpsum, String term, String searchPattern) {

//        jdk.nashorn.internal.runtime.regexp.joni.Regex regex = new jdk.nashorn.internal.runtime.regexp.joni.Regex(searchPattern);
//        jdk.nashorn.internal.runtime.regexp.joni.Matcher matcher = regex.matcher(loremIpsum.toCharArray());
//        for (jdk.nashorn.internal.runtime.regexp.joni.Region region: matcher.getRegion()) {
//            System.out.format("Found %s at %d \"%s\"\n", term, region.beg, region.end);
//        }

    }
}
