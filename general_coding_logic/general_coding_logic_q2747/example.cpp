#include <iostream>

bool lessReverse(const std::string& first_part, const std::string& last_part)
{
    if(first_part.size() != last_part.size())
        return 0;

    for(int i=0; i < first_part.size(); i++)
    {
        if(first_part[first_part.size()-i-1] == last_part[i])
        {
            continue;
        }
        else
        {
            return first_part[first_part.size()-i-1] < last_part[i];
        }
    }

    return 1;
}

int main()
{
    std::cout << lessReverse("818","717") << std::endl;
}