// This is a code snippet used by distractor 2
// that DOESN'T compile
#include <iostream>
#include <exception>
using namespace std;

void bad()
{
    throw "error here";
}

int main()
{
    cout << __FILE__ << endl;

    try
    {
        bad();
    }
    catch (...)
    {
        cout << ex << endl;
    }

    cout << "end" << endl;
}