#include <iostream>
#include <string>

int main()
{
    std::cout << __FILE__ << std::endl;

    std::string triplebyte(15, '-');
    auto it = triplebyte.begin();
    triplebyte.replace(it, it + 12, "Triplebyte");
    std::cout << triplebyte << std::endl;

    std::cout << std::endl;
}
