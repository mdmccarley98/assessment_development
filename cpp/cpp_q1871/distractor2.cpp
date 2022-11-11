#include <iostream>
#include <vector>
#include <memory>

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
        while (!items.empty()) {
            delete items.back();
            items.pop_back();
        }
    }

    bool add_to_basket(Item *item) {
        if (!item->is_available()) {
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
