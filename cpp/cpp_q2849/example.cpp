#include <iostream>

struct A 
{ 
    int num;
    A(): num(0){std::cout << "A";} 
    A(const A& a){std::cout << "a";} 
} a;

struct B 
{     
    B(){std::cout << "B";} 
    B(const B& b){std::cout << "b";} 
} b;

struct C 
{ 
    C(){std::cout << "C";} 
    C(const C& c){std::cout << "c";} 
} c;

int main() {
    a.num = 1;

    A(a);
    B(C);

    std::cout << a.num;
}