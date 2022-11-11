import tracemalloc
import random


class Apple:
    nutritious = True
    tasty = True
    fruit = True
    grocery = True
    perishable = True
    farmable = True


class Orange:
    __slots__ = 'nutritious', 'tasty', 'fruit', 'grocery', 'perishable', 'farmable'

    def __init__(self):
        self.nutritious = True
        self.tasty = True
        self.fruit = True
        self.grocery = True
        self.perishable = True
        self.farmable = True


class Banana:
    def __init__(self):
        self.nutritious = True
        self.tasty = True
        self.fruit = True
        self.grocery = True
        self.perishable = True
        self.farmable = True


def bench(class_, instances):
    tracemalloc.start()

    l = [class_() for _ in range(instances)]
    props = 0
    for c in l:
        for _ in dir(c):
            props += 1

    current, _top = tracemalloc.get_traced_memory()

    tracemalloc.stop()
    return current, props


instances = 1000
classes = [Apple, Orange, Banana]

_warm_up = bench(classes[0], 10)

stats = {}
for i in range(3):
    random.shuffle(classes)
    for c in classes:
        name = c.__name__
        mem, _ = bench(c, instances)
        stats[name] = stats.get(name, 0) + mem

for (k, v) in sorted(stats.items()):
    print(k, v / 3)
