#include <iostream>
class Animal {
public:
    virtual std::string name() {
        return "animal";
    }
    std::string noise() {
        return "aaa";
    }
};

class Cat: public Animal {
public:
    std::string name() override {
        return "cat";
    }
    virtual std::string noise() {
        return "meow";
    }
};

int main() {
    Cat cat;
    Animal& animal = cat;
    std::cout << "The " << cat.name() << " says: " << cat.noise() << std::endl;
    std::cout << "The " << animal.name() << " says: " << animal.noise() << std::endl;
}
