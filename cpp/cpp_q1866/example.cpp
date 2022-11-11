#include <iostream>

class Point {
public:
    float x, y;

    Point(float x, float y)
            : x(x), y(y) {
    }
};

int main() {
    auto p = Point{1.1f, 3.0f};
    std::cout << p << std::endl;
}