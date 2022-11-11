#include <iostream>
using namespace std;
 
class DataStruct {
    int data;
    DataStruct *a, *b;
 
public:    
    DataStruct();
    DataStruct(int);
    DataStruct* insert(DataStruct*, int);
    void traverse(DataStruct*);
};

DataStruct::DataStruct()
    : data(0)
    , a(nullptr)
    , b(nullptr)
{
}

DataStruct::DataStruct(int value)
{
    data = value;
    a = b = nullptr;
}


DataStruct* DataStruct::insert(DataStruct* c, int value)
{
    if (!c) {
        return new DataStruct(value);
    }
 
    if (value > c->data)
        c->b = insert(c->b, value);    
    else if(value < c->data)
        c->a = insert(c->a, value);    
    else
        return nullptr;
    
    return c;
} 

void DataStruct::traverse(DataStruct* c)
{
    if (!c) {
        return;
    }
    traverse(c->a);
    cout << c->data << endl;
    traverse(c->b);
}
 
// Driver code
int main()
{
    DataStruct b, *c = nullptr;
    c = b.insert(c, 50);
    b.insert(c, 30);
    b.insert(c, 20);
    b.insert(c, 40);
    b.insert(c, 70);
    b.insert(c, 70);
    b.insert(c, 60);
    b.insert(c, 80);
 
    b.traverse(c);
    return 0;
}