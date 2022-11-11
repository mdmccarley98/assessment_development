#include <iostream>

class Character {
public:
    unsigned int getId() { return 1; }
};

class Network {
public:
    unsigned int getId() { return 0xC0A80101; }
};

class Player: public Character, public Network {
public:
    unsigned int getCharacterId() { return Character->getId(); }
    unsigned int getNetworkId() { return Network->getId(); }
};

int main() {
    auto player = Player{};
    std::cout << "character id: " << player.getCharacterId() << std::endl;
    std::cout << "network id: " << player.getNetworkId() << std::endl;
}