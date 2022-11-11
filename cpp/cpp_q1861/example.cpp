#include <iostream>

class Thermostat {
    int settingC;

    Thermostat()
    {
        settingC = 21;
    }

    void update(int c)
    {
        settingC = c;
    }
};

int main() {
    std::cout << __FILE__ << std::endl;

    auto& thermostat = Thermostat{};
    thermostat.update(20);

    return 0;
}