#include <iostream>
#include <vector>
using namespace std;

class Car {
private:    
  int id_;
  std::string name_;
  std::string color_;

public:  
  Car(const int id, const std::string& name, const std::string& color)
    : id_(id), name_(name), color_(color)
  {
      cout << "ctor called " << id << endl;
  }; 
  
  Car(const Car& source)
    : id_(source.id_), name_(source.name_), color_(source.color_)
  {
    cout << "copy ctor called: " << id_ << endl;
  };

  Car(Car&& source)
    : id_(std::move(source.id_)), name_(std::move(source.name_)), color_(std::move(source.color_))
  {
    cout << "move ctor called: " << id_ << endl;
  };
    
  ~Car()
  {
    if (id_ != 0)
      cout << "destructor is called: " << id_ << endl;
    else
      cout << "destructor is called: no id" << endl;
  }
};
 
int main()
{    
  vector<Car> vec;
  vec.reserve(2);
  
  vec.push_back(Car{ 1, "tesla x", "white" });
  vec.push_back(Car{ 2,  "prius", "blue"});
  vec.push_back(Car{ 3, "ferrari", "red" });  
  
  return 0;
}