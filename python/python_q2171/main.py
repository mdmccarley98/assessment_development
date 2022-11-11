class OnlyStr:
    def __str__(self):
        print('str called')
        return 'str'    

class C:
    def __repr__(self):
        print('repr called')
        return 'rep'
    
    def __str__(self):
        print('str called')
        return 'str'


print('Correct:')
items = [C(), C()]
repr(items)

print('D1 (actually no output because repr does not exist)')
repr(OnlyStr())

print('D2 (actually str called)')
print(C())

print('D3 (not guaranteed to roundtrip)')
try:
    print(eval(repr(C())))
except Exception as e:
    print(e)