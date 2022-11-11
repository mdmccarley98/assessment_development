/* 
 * This program will may or may not NOT run without error, because it intentionally contains a bug.
 *
*/

#include <vector>
#include <string>
#include <iostream>

using namespace std;

int main()
{
 vector xs { 10, "hello"s };

 auto& ref = xs[5];

 cout << ref << '\n';

 xs.resize(11);

 cout << ref << '\n'; 
}
