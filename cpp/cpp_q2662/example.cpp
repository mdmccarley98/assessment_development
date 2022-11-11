#include <iostream>
#include <variant>

int main()
{
    std::variant<std::string, int> variant;
    variant = "Man";
    std::cout << std::get<std::string>(variant) << std::endl;
    variant = 2;
    std::cout << std::get<std::string>(variant) << std::endl;
}