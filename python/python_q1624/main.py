
class User:
    def __init__(self, password):
        self.__password = password

    def set_password(self, password):
        self.__password = password

    def check_password(self, password):
        return self.__password == password


def main():
    u = User('hello')
    print(u.check_password('hello'))

    u._User__password = 'goodbye'
    print(u.check_password('goodbye'))

    u.set_password('123')
    print(u.check_password('123'))

    User.set_password(u, '321')
    print(u.check_password('321'))


if __name__ == '__main__':
    main()
