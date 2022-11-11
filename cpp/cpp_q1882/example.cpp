#include <iostream>

#define MAX_NUMBERS 6
#define _ARRAY_SIZE(ARR) (sizeof(ARR) / sizeof((ARR)[0]))

void process(int numbers[MAX_NUMBERS]) {
    for (int i = 0; i < _ARRAY_SIZE(numbers); i++) {
        std::cout << i << ": " << numbers[i] << std::endl;
    }
}

int main() {
    int numbers[MAX_NUMBERS] = { 11, 22, 33, 44, 55, 66 };

    process(numbers);

    // exactly the same as in process()
    for (int i = 0; i < _ARRAY_SIZE(numbers); i++) {
        std::cout << i << ": " << numbers[i] << std::endl;
    }
}
