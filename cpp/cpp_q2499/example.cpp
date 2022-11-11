#include <iostream>
#include <map>
#include <type_traits>

template<typename EngineCoreType>
using EngineCoreMap = std::map<long double, EngineCoreType>; 

template<typename EngineCoreType>
class Car {
public: 
    Car(EngineCoreMap<EngineCoreType> engine_cores): engine_cores_(engine_cores) {std::cout << std::is_same<EngineCoreMap<int>, decltype(engine_cores)>::value << std::endl; }
private:
    EngineCoreMap<EngineCoreType>::type engine_cores_;
};

int main()
{
    EngineCoreMap<int> engine_cores = {{1.0, 1}, {2.0, 2}};
    Car<int> car(engine_cores);
}