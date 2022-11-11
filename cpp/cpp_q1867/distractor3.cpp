// This is a code snippet used by distractor 3
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
        throw bad();
    }
    catch (exception &ex)
    {
        cout << ex.what() << endl;
    }

    cout << "end" << endl;
}