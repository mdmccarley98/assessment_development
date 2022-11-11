class MyClass:
    def __init__(self, x):
        self.x = 1

    def __hash__(self):
        return 1

    def __getattribute__(self, name):
        print(f'Getattribute: {name}')
        return super().__getattribute__(name)

    def __len__(self):
        return 1

# NO getattribute
print('Instantiation:')
obj = MyClass(1)

print('Hash:')
hash(obj) 

print('Len:')
len(obj)

print('Repr:')
repr(obj)


# YES getattribute

print('X:')
obj.x 

print('Missing:')
try:
    obj.missing
except AttributeError:
    print('Raised OK on missing')

print('Accessing __init__:')
obj.__init__ 

print('Direct __hash__ lookup:')
obj.__hash__ 

print('Direct __getattribute__ lookup:')
obj.__getattribute__




