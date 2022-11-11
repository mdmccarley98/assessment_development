// This code compiles and prints all prime numbers between 2 and 10000
#include <iostream>
#include <cmath>

using namespace std;

bool is_prime_number(const int num)
{
    int j = 2;
    while(j*j <= num)
    {
        if(num%j == 0)
        {
            return false;
        }
        j++;
    }
    cout << num << endl;
    return true;
}

int main()
{
    for(int i = 2; i <= 10000; i++)
    {            
        is_prime_number(i); 
    }

    cout << endl;
}