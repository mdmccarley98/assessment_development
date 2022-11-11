#include <iostream>

int main()
{
    long int a = 0x12131416;
    long int b = 0x12131415;    
    std::cout <<  ((a ^ b) << 2) << std::endl;
}