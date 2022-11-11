def recursion_a(num):

    if num == 0 or num > 1000:
        return num
    if num > 0:
        return recursion_b((num+1)*(-1))
    return recursion_a(num+1)


def recursion_b(num):
    if num == 0 or num > 1000:
        return num
    if num < 0:
        return recursion_a((num-1)*(-1))
    return recursion_b(num-1)

print(str(recursion_a(100)) + str(recursion_b(100)))