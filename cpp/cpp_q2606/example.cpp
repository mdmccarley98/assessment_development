#include <iostream>
#include <algorithm>

std::string rtrim(const std::string& str)
{
    auto result = str;
    result.erase(std::find_if(result.rbegin(), result.rend(), [](std::string::value_type ch) {
        return !std::isspace(ch);
    }).base(), result.end());
    return result;
}

int main()
{
    std::cout << rtrim("          everything is fine, maybe") << std::endl;
}