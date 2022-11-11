#include <iostream>
#include <future>

int main() {
    std::cout << __FILE__ << std::endl;

    int result = 0;
    auto handle = std::async(std::launch::async, []{
        int x = 6 * 7;
        result = x;
    });

    handle.wait();

    std::cout << result << std::endl;

    return 0;
}