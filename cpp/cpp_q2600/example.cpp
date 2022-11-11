#include<iostream>

int return_num()
{
  return 10;
}

struct test
{
  static int x;
//   static int return_num()
//   {
//     return 11;
//   }
};

int test::x = return_num();

int main()
{
    std::cout << test::x;
}