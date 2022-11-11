#include <iostream>

class Vehicle
{
public:
  Vehicle() 
  { 
    std::cout << "Creating Vehicle" << std::endl; 
  }
  ~Vehicle() 
  { 
    std::cout << "Destroying Vehicle" << std::endl; 
  }
};

class Carrier
{
public:
  Carrier()
  {
    std::cout << "Creating Carrier" << std::endl; 
  }
  ~Carrier() 
  { 
    std::cout << "Destroying Carrier" << std::endl;
  }
};

class Truck: public Vehicle, public Carrier 
{
public:
  Truck() 
  { 
    std::cout << "Creating Truck" << std::endl;
  }
  ~Truck() 
  { 
    std::cout << "Destroying Truck" << std::endl;
  }
};

int main() 
{ 
  Truck t;  
}