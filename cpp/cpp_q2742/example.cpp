/* This will not compile as-written, because the implementation of foldr() requires
member functions begin() and end(), which arrays don't have: */

#include <vector>
#include <numeric>

template <typename T, typename U>
auto foldr(const T& xs, const U val)
{
 return std::accumulate(xs.begin(), xs.end(), val);
}

/* Here is a version of foldr() that works as intended, because
free-function std::begin() and std::end() are used to capture the
extent of the array:

template <typename T, typename U>
auto foldr(const T& xs, const U val)
{
 return std::accumulate(std::begin(xs), std::end(xs), val);
}
*/

int main()
{
 std::vector xs { 1, 2, 3, 4, 5 };

 int ys[] = { 1, 2, 3, 4, 5 };

 auto sum_xs = foldr(xs, 0);
 auto sum_ys = foldr(ys, 0);
}
