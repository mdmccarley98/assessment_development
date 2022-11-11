// Copyright (C) 2020 Triplebyte
package distractor2;

public class Downloader implements Runnable {
    final static Boolean[] done = new Boolean[]{false};

    public void run() {
        System.out.println("Downloading");
        synchronized (done) {
            done[0] = true;
            System.out.println("Downloader after done");
        }
    }

    public static void main(String[] args) {
        Thread thread = new Thread(new Downloader());
        thread.start();
        try {
            synchronized (done) {
                done.wait();
                System.out.println("main() after wait");
            }
        } catch (InterruptedException ignored) {
        }
    }
}
