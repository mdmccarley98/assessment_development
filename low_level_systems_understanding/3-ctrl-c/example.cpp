#include <signal.h>
#include <chrono>
#include <iostream>
#include <thread>

typedef void (*SignalHandlerFuncPtr)(int);

int g_exit_code;
bool g_should_exit;

void signal_handler(int sig)
{
	if (sig == SIGINT) {
		std::cout << std::endl << "Caught SIGINT, graceful shutdown" << std::endl;
		g_exit_code = 0;
		g_should_exit = true;
	}
}

int main(int argc, char** argv)
{
	g_exit_code = -1;
	g_should_exit = false;
	std::cout << "Press CTRL+C for graceful shutdown" << std::endl;

	SignalHandlerFuncPtr previous = signal(SIGINT, signal_handler);
	while (!g_should_exit) {
		std::this_thread::sleep_for(std::chrono::seconds(1));
	}
	return g_exit_code;
}