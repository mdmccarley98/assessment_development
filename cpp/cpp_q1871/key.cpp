#include <iostream>
#include <vector>

class Item {
public:
    bool available;

    Item() : available(false) {}

    explicit Item(bool available) : available(available) {}

    bool is_available() const { return available; }
};

class Cart {
public:
    virtual ~Cart() {
        for (auto *i : items) {
            delete i;
        }
    }

    bool add_to_basket(Item *item) {
        if (!item->is_available()) {
            delete item;
            return false;
        }
        items.push_back(item);
        return true;
    }

private:
    std::vector<Item *> items;
};

void add_wishlist(Cart &cart) {
    cart.add_to_basket(new Item{true});
    cart.add_to_basket(new Item{false});
    cart.add_to_basket(new Item{true});
    cart.add_to_basket(new Item{false});
}

int main() {
    auto cart = Cart{};
    add_wishlist(cart);
}
