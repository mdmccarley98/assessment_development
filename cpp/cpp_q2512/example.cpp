#include <iostream>
#include <memory>

int main()
{
    auto ptr = std::unique_ptr<std::string>(new std::string("String belongs to ptr"));

    std::shared_ptr<std::string> ptr_2 = std::make_unique<std::string>();
    ptr_2.reset(ptr.get());

    std::cout << *ptr_2 << std::endl;
}
