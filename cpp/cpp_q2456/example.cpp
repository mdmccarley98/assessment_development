#include <algorithm>
#include <iostream>
#include <set>
#include <vector>

template<typename T>
void printStl(T container)
{
    for(const auto& number: container)
        std::cout << number << " "; 
    std::cout << std::endl;
}

int main()
{
    std::set<int> numbers_set =       {5, 4, 5, 3, 4, 2, 1};
    std::vector<int> numbers_vector = {1, 2, 3, 4, 5};

    numbers_set.erase(4);    
    std::make_heap(numbers_vector.begin(), numbers_vector.end());
    numbers_vector.erase(numbers_vector.begin() + 4);

    printStl(numbers_set);
    printStl(numbers_vector);
}