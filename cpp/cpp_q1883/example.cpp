#include <algorithm>
#include <iostream>
#include <vector>


void example(std::vector<float>& numbers, float i) {
    std::transform(
        numbers.begin(),
        numbers.end(),
        numbers.begin(),
        [&i](float x) { return x + i++; }
    );
}

int main()
{
    std::cout << __FILE__ << std::endl;

    std::vector<float> numbers = { 1.1f, 2.4f, 7.5f };
    example(numbers, 0.2f);

    for (auto& x : numbers) {
        std::cout << x << std::endl;
    }

    return 0;
}
