#include <iostream>

int main()
{
    int sum = 0;
    int i=10;
    while(i < 1)
    {
        sum += i;
        sum = sum * 2;
        i--;
    }
    std::cout << sum << std::endl;
}