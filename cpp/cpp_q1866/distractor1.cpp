#include <iostream>
#include <sstream>

class Point {
public:
    float x, y;

    Point(float x, float y)
            : x(x), y(y) {
    }

    operator std::string() const {
        std::stringstream s;
        s << "Point(x: " << x << ", y: " << y << ")";
        return s.str();
    }
};

int main() {
    std::cout << __FILE__ << std::endl;

    auto p = Point{1.1f, 3.0f};
    std::cout << p << std::endl;
}