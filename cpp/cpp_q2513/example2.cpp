#include <iostream>
#include <memory>

class A
{
public:    
    std::ostream& operator<<(std::ostream& os, const A& a);
};

std::ostream& operator<<(std::ostream& os, const A& a)
{
    os << "This IS class A";
    return os;
}

int main()
{   
    auto deleteA = ;

    std::unique_ptr<A, decltype(deleteA)> a_ptr(new A(), deleteA);
    std::cout << *a_ptr << std::endl;
}