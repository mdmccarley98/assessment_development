from pprint import pprint

class MyDict(dict):
    def __del__(self):
        print(f'Deleting MyDict with id={id(self)}')

# Code snippet
import gc

# Self-reference
my_dict = MyDict()
my_dict[1] = my_dict
del my_dict

# Forward-backwards link
class DoublyLinkedListNode:
    def __init__(self):
        self.prev = None
        self.next = None

    def __del__(self):
        print(f'Deleting DoublyLinkedListNode with id={id(self)}')

my_head = DoublyLinkedListNode()
my_tail = DoublyLinkedListNode()
my_head.next = my_tail
my_tail.prev = my_head
del my_head
del my_tail

# A -> B -> C -> A cycles

class LinkedListNode:
    def __init__(self):
        self.next = None

    def __del__(self):
        print(f'Deleting LinkedListNode with id={id(self)}')

my_a = LinkedListNode()
my_b = LinkedListNode()
my_c = LinkedListNode()

my_a.next = my_b
my_b.next = my_c
my_c.next = my_a

del my_a
del my_b
del my_c

gc.collect()

print('End of program')