// This code compiles
#include <iostream>

int main()
{
    const int* num_ptr = new int(2676);
    std::cout << *num_ptr << std::endl;

    int* num = const_cast<int*>(num_ptr);
    std::cout << *num << std::endl;

    char* str = reinterpret_cast<char*>(num);
    std::cout << *str << std::endl;

    float* num_f = reinterpret_cast<float*>(str);
    std::cout << *num_f << std::endl;
}