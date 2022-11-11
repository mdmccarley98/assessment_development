#include <iostream>
#include <memory>
#include <vector>

class Animal {
public:
    virtual std::string sound() = 0;
};
class Cat : public Animal {
public:
    std::string sound() override {
        return "meow";
    }
};
class Dog : public Animal {
public:
    std::string sound() override {
        return "bark";
    }
};

int main()
{
    std::cout << "Distractor 3:" << std::endl;

    auto animals = std::vector<std::shared_ptr<Animal>>{
        std::make_shared<Cat>(),
        std::make_shared<Dog>()};
    for (auto& a : animals) {
        std::string kind;
        if (dynamic_cast<std::shared_ptr<Cat>>(a))
        {
            kind = "cat";
        }
        else if (dynamic_cast<std::shared_ptr<Dog>>(a))
        {
            kind = "dog";
        }
        std::cout << kind << std::endl;
    }
}