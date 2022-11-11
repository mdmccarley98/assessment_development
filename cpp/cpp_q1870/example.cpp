#include <iostream>

class Counter
{
public:
    int count;
    Counter() : count(0) {}
    int add(int plus) {
        count += plus;
        return count;
    }
};

void add_10(Counter counter) {
    counter.add(10);
}

int main() {
    auto counter = Counter{};
    counter.add(5);
    add_10(counter);
    std::cout << counter.count << std::endl;
}
