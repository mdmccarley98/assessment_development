#include <iostream>

class Shape {
public:
    float area() { return 0.0f; }
};

class Square : public Shape {
public:
    float size;

    explicit Square(float size)
        : size(size)
    {
    }

    float area()
    {
        return size * size;
    }
};

class Rectangle : public Shape {
public:
    float width, height;

    Rectangle(float width, float height)
        : width(width)
        , height(height)
    {
    }

    float area()
    {
        return width * height;
    }
};

int main()
{
    Shape* square = new Square{ 4.0f };
    Shape* rect = new Rectangle{ 2.0f, 3.0f };

    std::cout << "square: " << square->area() << std::endl;
    std::cout << "rect: " << rect->area() << std::endl;

    return 0;
}
