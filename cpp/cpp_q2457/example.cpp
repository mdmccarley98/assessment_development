#include <iostream>

template<typename T>
decltype(auto) foo(T&& param)
{
    return param;
}

int main()
{
    const int x = 5.0;
    auto foo_return = foo(x);
    std::cout << foo_return << std::endl;
}