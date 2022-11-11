#include "lib.hpp"
#include <iostream>

void Printer::printSpecial(const std::string& input)
{
    for(int i = 0; i < multiplier; i++)
    {
        std::cout << input << " ";
    }
    std::cout << std::endl;
}