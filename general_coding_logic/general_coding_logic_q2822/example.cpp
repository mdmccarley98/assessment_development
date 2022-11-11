#include <iostream>

int recursion_a(const int num);
int recursion_b(const int num);

int recursion_a(const int num)
{    
    if(num == 0 || num > 1000) return num;    
    if(num > 0)
        return recursion_b((num+1)*(-1));
    return recursion_a(num+1);
}

int recursion_b(const int num)
{    
    if(num == 0 || num > 1000) return num;
    if(num < 0)
        return recursion_a((num-1)*(-1));    
    return recursion_b(num-1);
}

int main()
{
    std::cout << recursion_a(100);
    std::cout << recursion_b(100);
    return 0;
}