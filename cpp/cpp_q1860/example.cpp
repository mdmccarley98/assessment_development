#include <iostream>

int main() {

    enum Flag
    {
        DEVICE_1 = 1,
        DEVICE_2,
        DEVICE_2_R = 1 << 1,
        DEVICE_2_G = 1 << 2,
        DEVICE_2_B = 1 << 3,
        DEVICE_3,
        DEVICE_4,
    };

    std::cout << "DEVICE_1: " << DEVICE_1 << std::endl;
    std::cout << "DEVICE_2: " << DEVICE_2 << std::endl;
    std::cout << "DEVICE_2_R: " << DEVICE_2_R << std::endl;
    std::cout << "DEVICE_2_G: " << DEVICE_2_G << std::endl;
    std::cout << "DEVICE_2_B: " << DEVICE_2_B << std::endl;
    std::cout << "DEVICE_3: " << DEVICE_3 << std::endl;
    std::cout << "DEVICE_4: " << DEVICE_4 << std::endl;
}