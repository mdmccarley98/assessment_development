from abc import ABC, abstractclassmethod


class Vehicle(ABC):

    def __init__(self, id):
        self.id = id

    @abstractclassmethod
    def start(self):
        pass


class Car(Vehicle):
    def honk(self):
        print('beep beep')


car = Car('Zippy')
car.honk()
