def f(num):
    digits = []
    while num >= 0:
        digits.append(num % 4)
        if num < 4:
            break
        num //= 4
    return ''.join(['ACGT'[i] for i in reversed(digits)])

def test(num, expected):
    actual = f(num)
    code = 'FP'[actual == expected]
    print(code, num, expected, actual)


test(0, "A")
test(10, "GG")
test(19, "CAT")
test(9156, 'GATTACA')


test(301, "CAGTC")
test(676, 'GGGCA')
test(119, "CTCT")
test(195, "TAAT")
test(600, "GCCGA")
