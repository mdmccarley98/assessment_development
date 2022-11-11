#include <iostream>
#include <future>

int main() {
    std::cout << __FILE__ << std::endl;

    auto handle = std::async(std::launch::async, []{
        int x = 6 * 7;
        return x;
    });

    handle.wait();

    std::cout << handle.get() << std::endl;

    return 0;
}