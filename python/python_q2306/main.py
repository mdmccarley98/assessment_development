class MyClass:
    def method(self, x: str) -> bool:
        print('X is a str')

    def method(self, x: int) -> bool:
        print('X is an int')

    def method(self, x: bool) -> bool:
        print('X is a bool')



obj = MyClass()
obj.method()