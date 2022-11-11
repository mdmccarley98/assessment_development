#include <iostream>

int main() {
    struct { int x; int y; } point;
    point.x = 1;
    point.y = 2;
    std::cout << "x: " << point.x << " y: " << point.y << std::endl;
}