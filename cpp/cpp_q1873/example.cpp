#include <iostream>
#include <memory>

class Block {
public:
    friend std::ostream& operator<<(std::ostream& os, const Block& block) {
        os << "Block";
        return os;
    }
};

int main() {
    auto a = Block{};
    auto b = new Block{};
    auto c = std::unique_ptr<Block>();
    auto d = std::make_shared<Block>();
    auto e = std::weak_ptr<Block>(d);

    std::cout << "a: " << a << std::endl;
    std::cout << "b: " << *b << std::endl;
    std::cout << "c: " << *c << std::endl;
    std::cout << "d: " << *d << std::endl;
    std::cout << "e: " << *e.lock() << std::endl;

    delete b;
}