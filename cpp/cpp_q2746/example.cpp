#include <string>
#include <iostream>

using namespace std;

template <typename ...XS>
auto foldl0(XS ...xs) { return (xs + ...); }

template <typename ...XS>
auto foldl1(XS ...xs) { return (... + xs); }

template <typename X, typename ...XS>
auto foldl2(X x, XS ...xs) { return (x + ... + xs); }

template <typename X, typename ...XS>
auto foldl3(X x, XS ...xs) { return (xs + ... + x); }

int main()
{
 std::cout << foldl0(0, 1, 2) << '\n';
 std::cout << foldl1(0, 1, 2) << '\n';
 std::cout << foldl2(0, 1, 2) << '\n';
 std::cout << foldl3(0, 1, 2) << '\n';
}
