#include <iostream>
#include <typeinfo>

typedef float Pi;

int main() {
    auto x = Pi(3.141592653589793);
    std::cout << "x: " << typeid(x).name() << std::endl;
}