#include <iostream>

void logln(T message) : (T: int, std::string) {
    std::cout << message << std::endl;
}

int main() {
    logln("This is text");
    logln(88);
    return 0;
}
