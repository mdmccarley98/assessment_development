#include <iostream>

int main() {
    int i=1;
    do {
        std::cout << i;
        i++;
        if(i < 10) continue;
        if(i > 8) continue;
    } while(false);
    return 0;
}