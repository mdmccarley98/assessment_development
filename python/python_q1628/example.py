def inner(step):
    while True:
        s = step()
        if s <= 7:
            yield s
        else:
            return 20

def outer():
    gen3 = (i * 3 for i in range(1, 5))
    for s in inner(gen3.__next__):
        yield s

def main():
    for i in outer():
        print(i)

if __name__ == '__main__':
    main()
