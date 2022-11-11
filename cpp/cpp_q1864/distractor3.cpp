#include <iostream>
#include <future>

int main() {
    std::cout << __FILE__ << std::endl;

    struct Result
    {
        int result;
    } res;
    auto handle = std::async(std::launch::async, [] {
        int x = 6 * 7;
        res.result = x;
    });

    handle.wait();
    int result = res.result;

    std::cout << result << std::endl;

    return 0;
}