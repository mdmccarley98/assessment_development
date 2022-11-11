#include <iostream>

class Character {
public:
    unsigned int getId() { return 1; }
};

class Network {
public:
    unsigned int getId() { return 0xC0A80101; }
};

class Player: public Character, public Network {};

int main() {
    auto player = Player{};
    std::cout << "character id: " << player.getId() << std::endl;
    std::cout << "network id: " << player.getId() << std::endl;
}