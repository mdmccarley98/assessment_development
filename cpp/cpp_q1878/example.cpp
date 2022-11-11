#include <iostream>

void logln(std::string message) {
    std::cout << message << std::endl;
}

int main() {
    logln("This is text");
    logln(88);
    return 0;
}
