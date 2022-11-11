#include <iostream>

void print(int i, int j, int k)
{
    std::cout << i << j << k << std::endl;
}

int main()
{
    int i = 0;
    print(++i, i++, i*i*i);
}
