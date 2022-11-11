// Typical timings with N = 1024: ijk order is 13 seconds vs 2.5 seconds for ikj order

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

const int N = 1024;

void matmul(double A[N][N], double B[N][N], double C[N][N]) {
    for(int i = 0; i < N; ++i) {
        for(int k = 0; k < N; ++k) {
            for(int j = 0; j < N; ++j) {
                C[i][j] += A[i][k] + B[k][j];
            }
        }
    }
}


int main() {
    srand(0);
    clock_t start, end;
    double *a, *b, *c;

    a = malloc(N*N*sizeof(double));
    b = malloc(N*N*sizeof(double));
    c = malloc(N*N*sizeof(double));

    for(int i = 0; i < N; ++i) {
        for(int j = 0; j < N; ++j) {
            a[i*N + j] = i*N + j;
            b[i*N + j] = N*N - (i*N + j) - 1;
            c[i*N + j] = 0;
        }
    }

    start = clock();
    matmul(
        (double (*)[N])a, 
        (double (*)[N])b, 
        (double (*)[N])c);
    end = clock();
    double cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Time: %.3f\n\n", cpu_time_used);

    for(int i = 0; i < N; ++i) {
        for(int j = 0; j < N; ++j) {
            if(i % 32 == 0 && j % 32 == 0) {
                printf("%.0f ", c[i*N + j]);
            }
        }
        if(i % 32 == 0) {
            printf("\n");
        }
    }
}