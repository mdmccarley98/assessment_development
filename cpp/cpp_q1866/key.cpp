#include <iostream>

class Point {
public:
    float x, y;

    Point(float x, float y)
            : x(x), y(y) {
    }

    friend std::ostream &operator<<(std::ostream &os, const Point &p) {
        os << "Point(x: " << p.x << ", y: " << p.y << ")";
        return os;
    }
};

// Also works:
// std::ostream &operator<<(std::ostream &os, const Point &p)
// {
//     os << "Point(x: " << p.x << ", y: " << p.y << ")";
//     return os;
// }

int main() {
    std::cout << __FILE__ << std::endl;

    auto p = Point{1.1f, 3.0f};
    std::cout << p << std::endl;
}