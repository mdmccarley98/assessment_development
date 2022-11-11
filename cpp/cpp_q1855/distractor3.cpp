#include <iostream>

int main() {
    std::cout << __FILE__ << std::endl;

    int numbers[] = { 2, 3, 4, 5 };

    for (int i = 0; i < 4; i++) {
        i *= 2;
    }

    for (auto i : numbers) {
        std::cout << i << std::endl;
    }

    return 0;
}
