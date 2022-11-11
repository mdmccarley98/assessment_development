// Illustration of the structs used in Code Snippet
// This code compiles but there's nothing special to check
#include <iostream>

struct A
{
    ~A(){}; 
};

struct B
{
    B& operator=(const B& b){return *this;}; 
};

struct C
{
    C(){};
    C(const C& c){};
};