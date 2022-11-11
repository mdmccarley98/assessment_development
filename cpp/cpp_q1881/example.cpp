#include <iostream>

void log(int x, int y, const char* name) {
    std::string label = name ? name : "NULL";
    std::cout << label << " - x: " << x << ", y: " << y << std::endl;
}

void log(int x, int y, int z) {
    std::cout << "3d - x: " << x << ", y: " << y << ", z:" << z << std::endl;
}

int main() {
    log(1, 2, nullptr);
    log(3, 4, NULL);

    return 0;
}