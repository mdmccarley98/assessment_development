import math

def func(sin = math.sin):
    for i in range(40 * 1000 * 1000):
        sin(i)

if __name__ == '__main__':
    func()