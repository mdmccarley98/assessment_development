// Copyright (C) 2020 Triplebyte

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
