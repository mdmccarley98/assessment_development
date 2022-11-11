#include <iostream>
#include <memory>

class Cellphone
{
public:
    virtual void myId(){std::cout << "I am a general cellphone" << std::endl;}
};

class Galaxy : public Cellphone
{
public:
    virtual void myId(){std::cout << "I am a Galaxy" << std::endl;}
};

class IPhone : public Cellphone
{
public:
    virtual void myId(){std::cout << "I am an IPhone" << std::endl;}
};

decltype(auto) makeCellphone(const int& type)
{
    auto cellphone_ptr = std::make_unique<Cellphone>();
    if(type == 1)
    {
        cellphone_ptr.reset(new Galaxy());
    }
    if(type == 2)
    {
        cellphone_ptr.reset(new IPhone());
    }

    return cellphone_ptr;
}

int main()
{
    auto cellphone1 = makeCellphone(1);
    cellphone1->myId();
}