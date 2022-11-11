/* Note: This will intentionally not compile because derived2::member is private. */

#include <iostream>

using namespace std;

struct base
{
    int member = 0;
};

struct derived1 : base {};
class derived2 : base {};

int main()
{
    std::cout << derived1().member << '\n';
    std::cout << derived2().member << '\n';
}
