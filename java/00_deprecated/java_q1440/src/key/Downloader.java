// Copyright (C) 2020 Triplebyte
package key;

public class Downloader implements Runnable {
    static final Integer sync = 42;

    public void run() {
        while (true) {
            try {
                synchronized (sync) {
                    System.out.println("Downloading");
                    sync.notify();
                    System.out.println("Downloader after notify");
                    sync.wait();
                    System.out.println("Downloader after wait");
                    return;
                }
            } catch (InterruptedException ignored) {
            }
        }
    }

    public static void main(String[] args) {
        Thread thread = new Thread(new Downloader());
        thread.start();
        try {
            synchronized (sync) {
                sync.wait();
                System.out.println("main() after wait");
                sync.notify();
                System.out.println("main() after notify");
            }
        } catch (InterruptedException ignored) {
        }
    }
}
