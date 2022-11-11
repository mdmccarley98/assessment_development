#include <iostream>
#include <string>

int main()
{
    std::cout << __FILE__ << std::endl;

    std::string triplebyte(15, '-');
    triplebyte.replace(
        triplebyte.begin() + 3,
        triplebyte.begin() + 9,
        "Triplebyte"
    );
    std::cout << triplebyte << std::endl;

    std::cout << std::endl;
}
