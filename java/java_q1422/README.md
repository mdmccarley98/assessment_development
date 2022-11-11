# Java Standard Library Thread API

## Item ID
1422

## Claim
Claim 2: libraries_frameworks


## Claim Behavior (evidence)
Class Thread
https://docs.oracle.com/javase/8/docs/api/java/lang/Thread.html

Java Threads
https://www.w3schools.com/java/java_threads.asp

Synchronized Methods
https://docs.oracle.com/javase/tutorial/essential/concurrency/syncmeth.html

ThreadGroup in Java
https://www.javatpoint.com/threadgroup-in-java


## Cognitive Model
* Comprehend
* Use


## Item Type
Multiple Choice


## Stem
You are writing a weather app.
The API you are using only lets you lookup one city's weather at a time.

Before calling the actual API you build out a temporary model below.

Which explanation best fits this program?

## Code Snippet
```java
import java.util.HashMap;

class Weather implements WeatherAPI {
    public Integer currentTempInCity(String city) {
        return 28;
    }
}

interface WeatherAPI {
    Integer currentTempInCity(String city);
}

public class WeatherFetcher implements Runnable {
    private final String city;
    private final WeatherAPI api;
    private static final HashMap<String, Integer> cityTemperatures = new HashMap<>();

    WeatherFetcher(String forCity) {
        this.city = forCity;
        this.api = new Weather();
    }

    @Override
    public void run() {
        int temp = api.currentTempInCity(city);
        collectTemp(city, temp);
    }

    private static void collectTemp(String city, int temperature) {
        synchronized (cityTemperatures) {
            cityTemperatures.put(city, temperature);
        }
    }

    public static void main(String[] args) {
        WeatherFetcher fetcherSeattle = new WeatherFetcher("Seattle");
        WeatherFetcher fetcherSanFrancisco = new WeatherFetcher("San Francisco");

        ThreadGroup fetcherThreadGroup = new ThreadGroup("Weather Fetcher");
        Thread threadSeattle = new Thread(fetcherThreadGroup, fetcherSeattle);
        Thread threadSanFrancisco = new Thread(fetcherThreadGroup, fetcherSanFrancisco);

        threadSeattle.start();
        threadSanFrancisco.start();
        try {
            threadSeattle.join();
            threadSanFrancisco.join();
        } catch (InterruptedException e) {
            fetcherThreadGroup.interrupt();
            e.printStackTrace();
        }

        cityTemperatures.forEach((city, temp) -> System.out.println("The temperature in " + city + " is " + temp));
    }
}
```

## Answer Key
* The main thread waits for each thread to finish.
* The contents of `cityTemperatures` contain the temperature for both Seattle and San Francisco.

## Distractors

### 1.
* `.join()` will throw an exception because the thread has not finished.
* The contents of `cityTemperatures` are empty.

### 2.
* `.join()` may throw an exception if `threadSeattle` or `threadSanFrancisco` were not finished by the time the main thread got to the first `.join`.
* The contents of `cityTemperatures` are either both cities, just Seattle, just San Francisco, or empty.

### 3.
* The main thread waits for each thread to finish.
* `cityTemperatures.forEach` will throw an exception because it is not synchronized with the other threads. 


## Common errors, misconceptions, or irrelevant information (optional):
There are Java libraries that greatly simplify all this code, but this is one of many possible ways to use the standard threads API.

In this case, the API is just returning an integer, so the threads will finish.

* The main thread uses the `.join()` method to wait for each thread.
    * If the city threads have not finished, the main thread will just wait, it will not throw an exception because a city thread has not finished yet.
* Whether San Francisco or Seattle finish first doesn't matter.
    * The main thread will first wait for Seattle, then San Francisco.
* After the second `.join()` the contents of `cityTemperatures` will always be both cities at a temperature of 28.

`synchronized (cityTemperatures)` ensures if both threads finish at the same time, they wait for each-other to write results to `cityTemperatures`.
The main thread does not need `synchonized` in this case, because the threads have been joined before it accesses `cityTemperatures`.

A better practice would be to synchronize in the main thread.
Because in the future a developer could easily add a new city and forget to `join` it.
In that case we still could not say it "will" throw an exception.
In this program, where we remembered to join all the city threads, it won't throw an exception.

Normally we couldn't be confident the program would finish, because of network calls in `currentTempInCity`.
But this particular program will finish, given that the computer doesn't have any other issues like lack of RAM
or hitting a kernel thread limit.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

