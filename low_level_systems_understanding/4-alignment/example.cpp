#include <stdio.h>
#include <algorithm>
#include <chrono>
#include <cmath>
#include <ctime>
#include <map>
#include <numeric>
#include <vector>

#define GAP_BYTES 32
#define ALIGNER 64
#define ARRAY_SIZE 16*4
#define BUFFER_SIZE (ARRAY_SIZE*4)+ALIGNER+(GAP_BYTES*4)
#define PERF_TIMES 10000000
#define PERF_SETS 10

void calc(float* X, float* Y, const size_t elements)
{
	for (auto i = 0; i < elements/4; i++) {
		const auto j = i * 4;
		// sum square with striping
		X[j] = std::sqrt(Y[j] * Y[j] + X[j + 1] * X[j + 1] + Y[j + 2] * Y[j + 2] + X[j + 3] * X[j + 3]);
		Y[j] = std::sqrt(X[j] * X[j] + Y[j + 1] * Y[j + 1] + X[j + 2] * X[j + 2] + Y[j + 3] * Y[j + 3]);
	}
}

double time(const char* name, float* X, float* Y)
{
	const auto start = std::chrono::steady_clock::now();
	for (auto i = 0; i < PERF_TIMES; i++)
	{
		calc(X, Y, ARRAY_SIZE);
	}
	const auto end = std::chrono::steady_clock::now();
	const auto duration = std::chrono::duration_cast<std::chrono::duration<double>>(end - start);
	const double seconds = duration.count();
	return seconds;
}

int main(int argc, char** argv)
{
	alignas(ALIGNER) float a_buf[ARRAY_SIZE + ALIGNER];
	alignas(ALIGNER) float b_buf[ARRAY_SIZE + ALIGNER];
	alignas(ALIGNER) float c_buf[ARRAY_SIZE + ALIGNER];
	alignas(ALIGNER) float d_buf[ARRAY_SIZE + ALIGNER];

	float* A = (float*)((uint8_t*)a_buf + 1); // not aligned
	float* B = b_buf; // aligned
	float* C = (float*)((uint8_t*)c_buf + 5);
	float* D = d_buf; // aligned
	printf("A: %p\n", A);
	printf("B: %p\n", B);
	printf("C: %p\n", C);
	printf("D: %p\n", D);
	std::map<float*, const char*> array_names{{A, "A"}, {B, "B"}, {C, "C"}, {D, "D"}};

	// make the CPU think it's doing something useful
	for (auto i = 0; i < ARRAY_SIZE; i++)
	{
		const auto d = static_cast<float>(static_cast<float>(i) / ARRAY_SIZE);
		A[i] = d;
		B[i] = d;
		C[i] = d;
		D[i] = d;
	}

	// Warm Up, put it in CPU cache
	printf("warming up\n");
	calc(A, B, ARRAY_SIZE);
	calc(A, C, ARRAY_SIZE);
	calc(A, D, ARRAY_SIZE);

	calc(B, A, ARRAY_SIZE);
	calc(B, C, ARRAY_SIZE);
	calc(B, D, ARRAY_SIZE);

	calc(C, A, ARRAY_SIZE);
	calc(C, B, ARRAY_SIZE);
	calc(C, D, ARRAY_SIZE);

	calc(D, A, ARRAY_SIZE);
	calc(D, B, ARRAY_SIZE);
	calc(D, C, ARRAY_SIZE);

	// perf timing
	printf("timing ");
	struct TimeResult
	{
		float* X;
		float* Y;
		double time;
	};
	std::vector<TimeResult> time_results;
	for (auto i = 0; i < PERF_SETS; i++)
	{
		printf(".");
		fflush(stdout);
		time_results.push_back(TimeResult{A, B, time("A:B", A, B)});
		time_results.push_back(TimeResult{A, C, time("A:C", A, C)});
		time_results.push_back(TimeResult{A, D, time("A:D", A, D)});

		time_results.push_back(TimeResult{B, A, time("B:A", B, A)});
		time_results.push_back(TimeResult{B, C, time("B:C", B, C)});
		time_results.push_back(TimeResult{B, D, time("B:D", B, D)});

		time_results.push_back(TimeResult{C, A, time("C:A", C, A)});
		time_results.push_back(TimeResult{C, B, time("C:B", C, B)});
		time_results.push_back(TimeResult{C, D, time("C:D", C, D)});

		time_results.push_back(TimeResult{D, A, time("D:A", D, A)});
		time_results.push_back(TimeResult{D, B, time("D:B", D, B)});
		time_results.push_back(TimeResult{D, C, time("D:C", D, C)});
	}

	printf("\nresults:\n");

	std::map<float*, std::vector<double>> array_times;
	for (const auto& result : time_results)
	{
		if (array_times.find(result.X) == array_times.end())
		{
			std::vector<double> t;
			t.push_back(result.time);
			array_times[result.X] = t;
		}
		else
		{
			array_times[result.X].push_back(result.time);
		}
		if (array_times.find(result.Y) == array_times.end())
		{
			std::vector<double> t;
			t.push_back(result.time);
			array_times[result.Y] = t;
		}
		else
		{
			array_times[result.Y].push_back(result.time);
		}
	}

	struct ArrayStats {
		const float* buffer;
		const std::vector<double> times;
		const double average;
		const double best;
		const char* name;
	};

	std::vector<ArrayStats> stats;
	for (const auto& time : array_times)
	{
		const double avg = std::accumulate(time.second.begin(), time.second.end(), 0.0) / time.second.size();
		double best = time.second[0];
		for (const auto& v : time.second) {
			if (v < best) {
				best = v;
			}
		}
		stats.emplace_back(ArrayStats{time.first, time.second, avg, best, array_names[time.first]});
	}
	//std::sort(stats.begin(), stats.end(), [](const ArrayStats& a, const ArrayStats& b) -> bool { return a.average < b.average; });

	for (const auto& stat : stats)
	{
		printf("%s (%p): value: %f avg:%f/s best:%f/s \n", stat.name, stat.buffer, stat.buffer[0], stat.average, stat.best);
	}
	return 0;
}
