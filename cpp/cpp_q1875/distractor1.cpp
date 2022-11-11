#include <iostream>
#include <vector>

class Inventory {
    std::vector<std::string> items;
    friend std::ostream;

public:
    void add(std::string item)
    {
        items.push_back(item);
    }
};

std::ostream& operator<<(std::ostream& os, const Inventory& inventory)
{
    os << "Inventory: ";
    for (auto& item : inventory.items) {
        os << item << ", ";
    }
    return os;
}

int main()
{
    auto inventory = Inventory {};
    inventory.add("rope");
    inventory.add("note");
    inventory.add("map");
    std::cout << inventory << std::endl;
    return 0;
}
