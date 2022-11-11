// Copyright (C) 2020 Triplebyte
package distractor3;

public class Downloader implements Runnable {
    static final Integer sync = 42;

    public void run() {
        System.out.println("Downloading");
        synchronized (sync) {
            sync.notifyAll();
            System.out.println("Downloader after notifyAll");
        }
    }

    public static void main(String[] args) {
        Thread thread = new Thread(new Downloader());
        for (int i = 1; i <= 2; i++) {
            try {
                synchronized (sync) {
                    sync.wait();
                    System.out.println("main() after sync wait " + i);
                }
            } catch (InterruptedException ignored) {
                return;
            }
        }
        thread.start();
    }
}
