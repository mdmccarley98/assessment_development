#include <iostream>
#include <memory>
#include <cassert>

int g_id = 0;

class Pizza {
public:
    int id;
    Pizza() {
        this->id = ++g_id;
        std::cout << "new Pizza: " << id << std::endl;
    }
    Pizza& cook() {
        return *this;
    }
};
class Party {
public:
    int id;
    Party() {
        this->id = ++g_id;
        std::cout << "new Party: " << id << std::endl;
    }
    void bring(Pizza& pizza) {
        std::cout << "Pizza " << pizza.id << " brought to " << this->id << std::endl;
    }
};

void attend(Party& party, Pizza* pizza) {
    party.bring(pizza->cook());
//    party->bring(pizza->cook());
//    party.bring(pizza.cook());
//    party->bring(pizza.cook());
}

int main() {
    Party party;
    auto pizza = std::make_shared<Pizza>();

    attend(party, pizza.get());

    std::cout << "g_id: " << g_id << std::endl;
    assert(g_id == 2 && "no extra copies were made");
}