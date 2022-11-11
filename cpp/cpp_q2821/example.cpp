#include <iostream>

int main()
{
    auto glambda = [](auto a, auto&& b) { return a < b; };
    bool b = glambda(3, 3.14);    
    
    auto vglambda = [](auto printer)
    {
        return [=](auto&&... ts)
        { 
            printer(std::forward<decltype(ts)>(ts)...);
            return [=] { printer(ts...); }; 
        };
    };
    auto p = vglambda([](auto v1, auto v2, auto v3) { std::cout << v1 << v2 << v3 << std::endl; });
    auto q = p(1, b, 3.14); // outputs 1a3.14
    q();       
}