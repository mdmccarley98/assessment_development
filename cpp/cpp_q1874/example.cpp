#include <iostream>
#include <vector>
#include <memory>

class Shape {
public:
    virtual float area() { return 0.0f; }
};

class Square : public Shape {
public:
    float size;

    explicit Square(float size) : size(size) {}

    float area() override {
        return size * size;
    }
};

class Rectangle : public Shape {
public:
    float width, height;

    Rectangle(float width, float height)
            : width(width), height(height) {
    }

    float area() override {
        return width * height;
    }
};

int main() {
    std::vector<std::shared_ptr<Shape>> shapes;
    shapes.push_back(std::make_shared<Square>(3.f));
    shapes.push_back(std::make_shared<Rectangle>(2.f, 4.f));
    shapes.push_back(std::make_shared<Square>(2.f));

    for (auto &shape : shapes) {
        std::cout << shape->area() << std::endl;
    }

    return 0;
}
