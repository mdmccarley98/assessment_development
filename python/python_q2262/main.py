class MyString:
    def __init__(self, contents):
        self.contents = contents

    def __hash__(self):
        return ord(self.contents[0])

    def __repr__(self):
        return f'MyString({self.contents})'

car = MyString('car')
cat = MyString('cat')
print(hash(car), hash(cat))


d = {car: 0, cat: 0}
d[car] += 1
d[cat] += 2
print(d)