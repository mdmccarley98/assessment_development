#include <iostream>

int f1(int a)
{
    if(a==0) return 1;
    return a*f1(a-1);
}

int main()
{
    auto f2 = [](const int a, const int b){return std::abs(2*a-3*b);};
    std::cout << f1(f2(2,3)) << std::endl;
}