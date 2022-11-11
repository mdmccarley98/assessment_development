def adder():
    total = 0
    while True:
        n = yield total
        total += n

gen = adder()

# Works
for i in [None, 1, 2, 3]:
    print(gen.send(i))


# Fails
gen = adder()
try:
    for i in [1, 2, 3]:
        print(gen.send(i))
except TypeError as e:
    print(e)
