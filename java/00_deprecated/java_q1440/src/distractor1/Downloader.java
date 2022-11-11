// Copyright (C) 2020 Triplebyte
package distractor1;

public class Downloader implements Runnable {
    static final Integer sync = 42;

    public void run() {
        try {
            synchronized (sync) {
                System.out.println("Downloading");
                sync.wait();
                System.out.println("Downloader after wait");
            }
        } catch (InterruptedException ignored) {
        }
    }

    public static void main(String[] args) {
        Thread thread = new Thread(new Downloader());
        thread.start();
        synchronized (sync) {
            sync.notify();
            System.out.println("main() after notify");
        }
    }
}
