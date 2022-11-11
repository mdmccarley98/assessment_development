fruits = ['apple', 'banana', 'apple', 'carrot']
numbers = ((i + 2) * 3 for i in range(4))

d = {}
for k,v in zip(fruits, numbers):
    d = {**d, k:v}

d = dict(sorted(d.items(), key=lambda i: i[0]))

print(d)
