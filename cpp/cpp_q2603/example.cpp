#include <iostream>
#include <vector>

int main()
{
    std::vector<int> vec = {0, 1, 2, 3, 4, 5};
    for (const auto& num: vec) std::cout << num << std::endl;
}