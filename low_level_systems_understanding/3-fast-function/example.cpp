#include <chrono>
#include <iostream>

constexpr auto BUFFER_SIZE = 20000;
constexpr auto ITERATIONS = 1000000;

struct Object
{
	int big_buffer[BUFFER_SIZE];
};

void do_ref(Object& ref, int i)
{
	ref.big_buffer[i % BUFFER_SIZE] = i;
}

void do_copy(Object copy, int i)
{
	copy.big_buffer[i % BUFFER_SIZE] = i;
}

void __stdcall cstandard(Object copy, int i)
{
	copy.big_buffer[i % BUFFER_SIZE] = i;
}

class Example
{
public:
	void __fastcall ClassFast(Object copy, int i)
	{
		copy.big_buffer[i % BUFFER_SIZE] = i;
	}
};

int main(int argc, char** argv)
{
	Object* object = new Object;

	std::cout << "By Ref: ";
	const auto ref_start = std::chrono::steady_clock::now();
	for (auto i = 0; i < ITERATIONS; i++)
	{
		if (i % (ITERATIONS/10) == 0)
		{
			std::cout << ".";
		}
		do_ref(*object, i);
	}
	const auto ref_end = std::chrono::steady_clock::now();
	std::cout << std::endl;


	std::cout << "By Copy: ";
	const auto copy_start = std::chrono::steady_clock::now();
	for (auto i = 0; i < ITERATIONS; i++)
	{
		if (i % (ITERATIONS/10) == 0)
		{
			std::cout << ".";
		}
		do_copy(*object, i);
	}
	const auto copy_end = std::chrono::steady_clock::now();
	std::cout << std::endl;


	std::cout << "By __stdcall: ";
	const auto stdcall_start = std::chrono::steady_clock::now();
	for (auto i = 0; i < ITERATIONS; i++)
	{
		if (i % (ITERATIONS/10) == 0)
		{
			std::cout << ".";
		}
		cstandard(*object, i);
	}
	const auto stdcall_end = std::chrono::steady_clock::now();
	std::cout << std::endl;


	std::cout << "By Class __fastcall: ";
	const auto fastcall_start = std::chrono::steady_clock::now();
	Example example;
	for (auto i = 0; i < ITERATIONS; i++)
	{
		if (i % (ITERATIONS/10) == 0)
		{
			std::cout << ".";
		}
		example.ClassFast(*object, i);
	}
	const auto fastcall_end = std::chrono::steady_clock::now();
	std::cout << std::endl;


	std::cout << "Ref Time:" << std::chrono::duration_cast<std::chrono::duration<double>>(ref_end - ref_start).count() << " seconds" << std::endl;
	std::cout << "Copy time:" << std::chrono::duration_cast<std::chrono::duration<double>>(copy_end - copy_start).count() << " second" << std::endl;
	std::cout << "__stdcall Time:" << std::chrono::duration_cast<std::chrono::duration<double>>(stdcall_end - stdcall_start).count() << " seconds" << std::endl;
	std::cout << "__fastcall class Time:" << std::chrono::duration_cast<std::chrono::duration<double>>(fastcall_end - fastcall_start).count() << " seconds" << std::endl;

	delete object;

	return 0;
}