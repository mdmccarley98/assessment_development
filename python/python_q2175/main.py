class AllThree:
    def __init__(self):
        self._inner = []
    
    def __contains__(self, x): 
        print('in contains')
        return x in self._inner

    def __iter__(self, x): 
        print('in iter')
        return iter(self._inner)

    def __getitem__(self, i): 
        print('in getitem')
        return self._inner[i]

print('All 3')
my_container = AllThree()
1 in my_container

