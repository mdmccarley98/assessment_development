#include <iostream>
#include <regex>

int main()
{
    std::regex str_regex("([A-Z]*)[A-Za-z]([0-9]*)(=)[0-9]([a-z]*)([0-9]*)");
    std::cout << std::regex_match("ABCDEFm0=0ABCDEFm0", str_regex) << " "
              << std::regex_match("abedQ0=Q0", str_regex) << " "
              << std::regex_match("g233230=0", str_regex) << " "
              << std::regex_match("T1=8aaaaaaaaaaaa", str_regex) << std::endl;

    std::regex str2_regex("[12]?[0-9]{1,2}");
    std::cout << std::regex_match("267", str2_regex) << " "
              << std::regex_match("0267", str2_regex) << " "
              << std::regex_match("66", str2_regex) << " "
              << std::regex_match("567", str2_regex) << std::endl;
}