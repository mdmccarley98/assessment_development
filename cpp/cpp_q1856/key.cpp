#include <iostream>

int main() {
    std::cout << __FILE__ << std::endl;

    enum Color { RED, ORANGE, YELLOW };
    Color c = ORANGE;
    std::string text;
    switch (c)
    {
        case RED: text += "red"; break;
        case ORANGE: text += "orange"; break;
        case YELLOW: text += "yellow"; break;
    }

    std::cout << text << std::endl;
    return 0;
}
