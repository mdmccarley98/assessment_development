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
    std::cout << "Distractor 2:" << std::endl;

    auto animals = std::vector<std::shared_ptr<Animal>>{
        std::make_shared<Cat>(),
        std::make_shared<Dog>()};
    for (auto& a : animals) {
        std::string kind;
        if ((Cat *)a.get())
        {
            kind = "cat";
        }
        else if ((Dog *)a.get())
        {
            kind = "dog";
        }
        std::cout << kind << std::endl;
    }
}