#include <iostream>

int main()
{
    bool is_car, has_spoiler, is_lowered;
    for(uint8_t i=0; i < 8; i++)
    {
        is_car = i & 1;
        has_spoiler = i & 2;
        is_lowered = i & 4;
        
        bool expr = ((!is_car && !has_spoiler) || (!is_car || !is_lowered));
        bool reducted = !(is_car && is_lowered);

        std::cout << is_lowered << " " << has_spoiler << " " << is_car << ": " 
                  << expr << " " << reducted << std::endl;
    }
}