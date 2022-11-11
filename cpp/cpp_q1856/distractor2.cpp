#include <iostream>

int main() {
    std::cout << __FILE__ << std::endl;

    enum Color { RED, ORANGE, YELLOW };
    Color c = ORANGE;
    std::string text;
    switch (c)
    {
        case RED: text = "red";
        case ORANGE: text = "orange";
        case YELLOW: text = "yellow";
    }

    std::cout << text << std::endl;
    return 0;
}
