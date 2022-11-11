#include <iostream>
#include <future>
#include <thread>


int main()
{
    std::cout << __FILE__ << std::endl;

    int result = 0;
    auto handle = std::async(
        std::launch::async,
        [](int result) {
            int x = 6 * 7;
            result = x;
        },
        result
    );

    handle.wait();

    std::cout << result << std::endl;

    return 0;
}