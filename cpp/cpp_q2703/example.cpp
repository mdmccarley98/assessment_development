/* Note: this will not compile because of an intentional error. */

#include <string>
#include <iostream>

using namespace std;

template <typename T>
struct pick_favorite
{};

template <>
struct pick_favorite<std::string>
{
 string operator()() { return "to say hello"; }
};

template <typename T>
struct show_favorite
{
 void operator()()
 {
	cout << "I sure like " << pick_favorite<T>{}() << "!\n";
 }
};

int main()
{
 show_favorite<std::string> sf;
 sf();	// calls the specialization with operator()

 show_favorite<int> sx;
 sx();	// error, there is no operator() defined for the primary template (comment out to compile program)
}
