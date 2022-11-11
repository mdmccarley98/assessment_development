# Java Domain Wait Notify

## Item ID
1440

## Claim
Claim 6: Candidates are able to complete everyday coding tasks that relate to the language’s core features.

## Claim Behavior (evidence)
Concurrency
https://docs.oracle.com/javase/tutorial/essential/concurrency/index.html

wait and notify() Methods in Java
https://www.baeldung.com/java-wait-notify

wait/notify definition
https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html


## Cognitive Model
* Use

## Item Type
Multiple Choice


## Stem
You're on a team writing a program that downloads a file while the rest of the program continues.
`wait()` and `notify()` are concurrency tools in Java.
For now the `Downloader` won't actually download while your team gets the concurrency bugs get worked out.

Four different team members submit their idea.  

Which one does NOT result in a deadlock?

## Code Snippet


## Answer Key
```java
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
```

## Distractors
### 1.
```java
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
```

### 2.
```java
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
```

### 3.
```java
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
```

## Common errors, misconceptions, or irrelevant information (optional):
Calling `notify()` does not immediately transfer control to the awakened thread.
From the Java docs on `notify()`
> The awakened thread will not be able to proceed until the current thread relinquishes the lock on this object.



### 1.
This program deadlocks with the following output:
```
main() after notify
Downloading
```
* Main grabs the sync, and notifies before the thread can start.
* Then the thread starts, and waits for a notify that already happened.
* Main finishes, but the program is still running because the thread is still waiting.

### 2.
This program deadlocks with the following output:
```
Downloading
Downloader after done
```
* Main waits for done to notify.
* The downloader thread never calls `done.notify()` and finishes.
* Main continues to wait for a notify.

### 3.
This program deadlocks with an empty output.
```
```
* Main locks on the first wait.
* Main never gets to the bottom where it starts the thread.
* The thread never starts, which is the only thing that notifies.

### Key
This program finishes with the following output:
```
Downloading
Downloader after notify
main() after wait
main() after notify
Downloader after wait
```
* Main starts the thread and immediately syncs and waits.
* The thread finally syncs and notifies main to continue.
* The thread waits.
* Main continues and notifies the thread to continue.
* Main finishes.
* The thread finishes.
* The program exits.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

