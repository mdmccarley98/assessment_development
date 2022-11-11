"""
Python 2.2 did not allow yield inside a try block.
Python 2.5 allows this and the finally runs when the .close() method is run at GC time.
Python 3.4 allows cyclic references with tp_del to be cleaned up.
"""

def gen():
    try:
        yield 1
        # legal, still computes the return value but the value is discarded. 
        # raises an uncatchable StopIteration exception.
        return 2 
    except Exception:
        yield 3
    finally:
        yield 4
        return 5 # discarded

print(list(gen()))

import dis
dis.dis(gen) # show that the return value is still loaded even though next() discards it