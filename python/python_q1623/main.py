class Treat:
    def description(self):
        return "is a treat"
    def taste(self):
        return "sweet"

class Baked:
    def description(self):
        return "is baked"
    def cook(self):
        return "baking"

class Cookie(Baked, Treat):
    def __str__(self):
        return "cookie " + self.description()

if __name__ == "__main__":
    cookie = Cookie()
    print("After {} the cookie it tastes {}, and the {}.".format(
        cookie.cook(), cookie.taste(), cookie
        ))