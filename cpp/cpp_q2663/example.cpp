#include <memory>
#include <iostream>
#include <type_traits>

template<typename>
constexpr bool is_unbounded_array = false;

template<typename Type>
constexpr bool is_unbounded_array<Type[]> = true;
 
template<typename>
constexpr bool is_bounded_array = false;

template<typename Type, std::size_t N>
constexpr bool is_bounded_array<Type[N]> = true;

template<class T, class... Ts>
typename std::enable_if<!std::is_array<T>::value, std::unique_ptr<T>>::type
make_unique(Ts&&... params)
{
    return std::unique_ptr<T>(new T(params...));
}

template<class T>
typename std::enable_if<is_unbounded_array<T>, std::unique_ptr<T>>::type
make_unique(std::size_t n)
{
    return std::unique_ptr<T>(new std::remove_extent_t<T>[n]());
}

template<class T, class... Ts>
typename std::enable_if<is_bounded_array<T>>::type
make_unique(std::size_t n)
{
    return std::unique_ptr<T>(new T[n]());
}

int main()
{
    auto ptr = make_unique<int>(3);
    std::cout << *ptr << std::endl;
}