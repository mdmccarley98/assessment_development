#include <iostream>
#include <optional>
#include <string>
#include <functional>

auto create_ref(bool b) {
    static std::string value = "Triplebyte";
    return b ? std::optional<std::reference_wrapper<std::string>>{value}
             : std::nullopt;
}

int main()
{   
    auto str = create_ref(true);
    auto nullopt_var = create_ref(false);
    if(!nullopt_var)
        std::cout << str->get() << std::endl;
}