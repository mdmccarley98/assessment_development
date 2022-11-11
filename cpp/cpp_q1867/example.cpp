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
    catch (exception &ex)
    {
        cout << ex.what() << endl;
    }

    cout << "end" << endl;
}