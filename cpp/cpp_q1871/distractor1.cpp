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
    bool add_to_basket(Item *item) {
        if (!item->is_available()) {
            return false;
        }
        items.push_back(std::make_shared<Item>(item));
        return true;
    }
private:
    std::vector<std::shared_ptr<Item>> items;
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
