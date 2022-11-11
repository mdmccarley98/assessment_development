# This code compiles and prints all prime numbers between 2 and 10000
def is_prime_number(num):
    j = 2
    while j*j <= num:
        if num % j == 0:
            return False
        j += 1
    print(num)
    return True


for i in range(2, 10000):
    is_prime_number(i)
