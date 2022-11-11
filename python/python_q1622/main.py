def key(months):
    for k, v in months.items():
        print(k, v)


def distractor1(months):
    for k, v in months:
        print(k, v)


def distractor2(months):
    for i in months.values():
        print(i, months[i])


def distractor3(months):
    for i in range(months):
        print(i, months[i])

def main():
    months = dict(January=1, February=2, March=3)
    
    print("key:")
    key(months)
    print()
    
    try:
        print("distractor 1:")
        distractor1(months)
    except ValueError as e:
        print(e)
        pass
    print()

    try:
        print("distractor 2:")
        distractor2(months)
    except KeyError as e:
        print(e)
        pass
    print()

    try:
        print("distractor 3:")
        distractor3(months)
    except TypeError as e:
        print(e)
        pass

if __name__ == "__main__":
    main()
