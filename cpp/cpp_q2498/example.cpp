#include <initializer_list>
#include <iostream>

class Widget
{
public:
    Widget(int i, bool b){std::cout << "A";}
    Widget(int i, double d){std::cout << "B";}
    Widget(std::initializer_list<long double> il){std::cout << "C";}
};

int main()
{
    Widget w1(10, true);
    Widget w2{10, true};
    Widget w3(10, 5.0);
    Widget w4{10, 5.0};
}