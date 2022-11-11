// This code doesn't work
#include <atomic>
#include <iostream>
#include <mutex>

struct Semaphore {
    int size;
    std::atomic<int> count = 0;
    std::mutex updateMutex;

    Semaphore(int n) : size(n) { count.store(0); }

    void aquire() {
        while (1) {
            std::lock_guard<std::mutex> lock(updateMutex);
            while (count >= size) {}
            if (count >= size) {
                updateMutex.unlock();
                continue;
            }
            ++count;
            break;
        }
    }

    void release() {
        std::lock_guard<std::mutex> lock(updateMutex);
        if (count > 0) {
            --count;
        }
    }
};