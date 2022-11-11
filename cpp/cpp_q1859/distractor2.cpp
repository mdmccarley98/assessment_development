#include <iostream>

int main() {
    std::cout << __FILE__ << std::endl;

    int[] array = { 1, 2, 3 };
    int sum = 0;
    for (auto i : array) {
        sum += i;
    }

    std::cout << sum << std::endl;
}