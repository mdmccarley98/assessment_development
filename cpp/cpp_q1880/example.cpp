#include <iostream>
#include <map>
#include <numeric>
#include <vector>

std::map<std::string, int> example(std::vector<std::string> &colors) {
	std::map<std::string, int> result;

	std::vector<int> numbers(colors.size());
	std::iota(numbers.begin(), numbers.end(), 0);
	for (auto& i : numbers) {
	    i = (i + 2) * 3;
	}

	auto c = colors.begin();
	auto n = numbers.begin();
	for (; c != colors.end() && n != numbers.end(); ++c, ++n) {
	    result[*c] = *n;
	}

	return result;
}

int main() {
    std::cout << __FILE__ << std::endl;

    std::vector<std::string> colors = {"green", "red", "green", "blue"};

	auto result = example(colors);

	for (auto& i : result) {
		std::cout << i.first << " : " << i.second << std::endl;
	}
}
