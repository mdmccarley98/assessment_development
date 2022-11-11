#include <iostream>

enum Spider {
    SPIDER_UP,
    RAIN_DOWN,
    SUN_OUT,
    RAIN_DRY,
};

void nursery_rhyme(Spider state) {
    loop: while (true) {
        switch (state) {
            case SPIDER_UP:
                std::cout << "The itsy-bitsy spider went up the water spout" << std::endl;
                state = RAIN_DOWN;
            case RAIN_DOWN:
                std::cout << "down came the rain and washed the spider out" << std::endl;
                state = SUN_OUT;
                goto loop;
            case SUN_OUT:
                std::cout << "up came the sun" << std::endl;
                state = RAIN_DRY;
            case RAIN_DRY:
                std::cout << "and dried up all the rain" << std::endl;
                state = SPIDER_UP;
                break;
        }
    }
}

int main()
{
    nursery_rhyme(SPIDER_UP);
    return 0;
}
