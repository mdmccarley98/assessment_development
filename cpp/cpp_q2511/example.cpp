#include <iostream>

struct override {
  operator auto() noexcept{
    std::cout << "1";
    return 1;
  }
};

int main() {
  auto&& a = override();
  std::cout << *a << std::endl;
}