import functools
import itertools
import operator

def stem(start, rate, times):
    for _ in range(times):
        start += start * rate
    return round(start, 2)

def key(start, rate, times):
    acc = lambda acc: acc + acc * rate
    subtotal = sum(acc(start) for _ in range(times))
    return round(subtotal, 2)

def distractor1(start, rate, times):
    subtotal = functools.reduce(lambda acc, _: acc + (acc * rate),
                               range(times),
                               start)
    return round(subtotal, 2)

def distractor2(start, rate, times):
    *_, last = itertools.accumulate(range(times),
                                    lambda acc, _: acc + (acc * rate),
                                    initial=start)
    return round(last, 2)

def distractor3(start, rate, times):
    for _ in range(times):
        start = operator.iadd(start, start * rate)
    return round(start, 2)

def distractor4(start, rate, times):
    compint = start * (1.0 + (rate / 1)) ** times
    return round(compint, 2)

if __name__ == '__main__':
    start, rate, times = 350.00, 0.035, 30
    s = stem(start, rate, times)
    print('stem', s)
    
    for f in [key, distractor1, distractor2, distractor3, distractor4]:
        result = f(start, rate, times)
        print(f.__name__, result == s, result)
