from abc import ABC, abstractmethod


class Vehicle(ABC):

    def __init__(self, id):
        self.id = id

    @abstractmethod
    def start(self):
        pass


class Car(Vehicle):
    def start(self):
        pass

    def honk(self):
        print('beep beep')


car = Car('Zippy')
car.honk()
