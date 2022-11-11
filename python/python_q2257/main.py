class Base:
    def __lt__(self, other): 
        print('Base LT')

    def __gt__(self, other): 
        print('Base GT')


class Derived(Base):    
    def __lt__(self, other):
        print('Derived LT')
    
    def __gt__(self, other):
        print('Derived GT')


b = Base()
d = Derived()

print(b < d) # surprise: calls d.__gt__, not b.__lt__
print(d > b) # calls d.__gt__