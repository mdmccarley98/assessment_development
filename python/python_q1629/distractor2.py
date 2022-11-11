class Threes:
    def __iter__(self):
        self.v = 0
        return self
    def __next__(self):
        self.v += 3
        if self.v > 30:
            return
        return self.v

for i in Threes():
    print(i)
