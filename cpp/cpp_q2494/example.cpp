#include <iostream>

class Base {
public:
    virtual void override(){std::cout << "override func Base" << std::endl;};
    virtual void f1(int x){std::cout << "f1" << " " << x << " func Base" << std::endl;};
    virtual void f2() &{std::cout << "f2 func Base" << std::endl;};
    void f3() const{std::cout << "f3 func Base" << std::endl;};
};
class Derived: public Base {
public:
    void override() override{std::cout << "override func Derived" << std::endl;};
    void f1(int x) override{std::cout << "f1" << " " << x << " func Derived" << std::endl;};
    void f2() &&{std::cout << "f2 func Derived" << std::endl;};
    void f3() const{std::cout << "f3 func Derived" << std::endl;};
};

int main()
{
    Derived d;
    d.f1(3);
    d.f2();
    d.f3();
    d.override();
}