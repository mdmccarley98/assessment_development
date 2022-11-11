#include <iostream>
#include <memory>

class A
{
public:    
    friend std::ostream& operator<<(std::ostream& os, const A& a);        
};

std::ostream& operator<<(std::ostream& os, const A& a)
{
    os << "This IS class A";
    return os;
}

int main()
{
    std::shared_ptr<A> a_ptr(nullptr, [](A* a) { delete a; });
    std::cout << *a_ptr << std::endl;
}