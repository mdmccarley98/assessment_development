#include <iostream>

class Counter
{
public:
    int count;
    Counter() : count(0) {}
    int add(int plus) {
        std::cout << std::hex << this << "\t add() start    count: " << std::dec << count << std::endl;
        count += plus;
        std::cout << std::hex << this << "\t add() end      count: " << std::dec << count << std::endl;
        return count;
    }
};

void add_10(Counter counter) {
    std::cout << std::hex << &counter << "\t add_10() start count: " << std::dec << counter.count << std::endl;
    counter.add(10);
    std::cout << std::hex << &counter << "\t add_10() end   count: " << std::dec << counter.count << std::endl;
}

int main() {
    auto counter = Counter{};
    std::cout << std::hex << &counter << "\t main() start   count: " << std::dec << counter.count << std::endl;
    counter.add(5);
    add_10(counter);
    std::cout << std::hex << &counter << "\t main() end     count: " << std::dec << counter.count << std::endl;
}
