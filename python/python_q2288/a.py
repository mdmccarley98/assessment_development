import math

def func():
    for i in range(40 * 1000 * 1000):
        math.sin(i)

if __name__ == '__main__':
    func()