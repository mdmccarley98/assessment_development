#include <iostream>

int main()
{
    std::string expr;
    std::cin >> expr;

    int count = 0;

    for (const auto& c: expr)
    {
        if (c == '(')
            count++;
        else if (c == ')')
            count--;
        else
        {
            std::cout << "No ( or ) found" << std::endl;
            return 0;
        }
    }

    if (count > 0)
        std::cout << count << " open parenthesis not closed" << std::endl;
    else if (count < 0)
        std::cout << std::abs(count) << " closed parenthesis are loose" << std::endl;
    else
        std::cout << "All parenthesis closed" << std::endl;

    return 1;
}