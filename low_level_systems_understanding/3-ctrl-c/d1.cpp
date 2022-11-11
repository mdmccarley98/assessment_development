#include <curses.h>
#include <iostream>

int main()
{
	initscr();
	while(true) {
		char key = getch();
		if (key == -1) continue;
		std::cout << "Got: " << int(key) << std::endl;
	}
	endwin();
	return 0;
}