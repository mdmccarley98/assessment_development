#include <iostream>

double mathOperation(double a, double b)
{
    return (a+b)/(b-a);
}

int main()
{
    int i = 2;    

    std::string a = mathOperation(i, i+2);

    std::cout << a << std::endl;
}