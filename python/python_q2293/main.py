import time


def f():
    try:
        time.sleep(100)
        return 0
    except KeyboardInterrupt:
        return 1
    finally:
        return 2


print(f())