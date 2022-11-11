#include <iostream>

template <class T>
class<T> {
    void logln<T>(T message) {
        std::cout << message << std::endl;
    }
};

int main() {
    logln("This is text");
    logln(88);
    return 0;
}
