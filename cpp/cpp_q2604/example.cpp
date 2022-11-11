#include <vector>
#include <iostream>

int main()
{
    std::vector<int> vec([]()->int {return 2;}(), 0);

    for(auto num: vec)
        std::cout << num << std::endl;

    return 0;
}