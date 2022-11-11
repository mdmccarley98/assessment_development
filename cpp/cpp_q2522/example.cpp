#include <iostream>

class A { public: int i; };

int main()
{
    delete[] new A[3]{ {0}, {1}, {2} };
}