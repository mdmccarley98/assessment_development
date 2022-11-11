from operator import attrgetter

from dataclasses import dataclass

@dataclass
class Car:
    brand: str
    model: str
    year: int

def generate_random_cars(n):
    import random
    brands = ['toyota', 'ford', 'dodge', 'chevrolet', 'gmc', 'chrysler', 'kia',
       'buick', 'infiniti', 'mercedes-benz', 'jeep', 'bmw', 'cadillac',
       'hyundai', 'mazda', 'honda', 'heartland', 'jaguar', 'acura',
       'harley-davidson', 'audi', 'lincoln', 'lexus', 'nissan', 'land',
       'maserati', 'peterbilt', 'ram']

    models = ['cruiser', 'se', 'mpv', 'door', '1500', 'pk', 'malibu', 'coupe',
       'wagon', 'forte', 'encore', 'sorento', 'doors', 'chassis', 'q70',
       'camaro', 'convertible', 'vans', 'srw', 'compass', 'enclave',
       '300', 'cherokee', 'pacifica', 'x3', 'equinox', 'challenger', 'm',
       'colorado', 'focus', 'durango', 'escape', 'charger', 'explorer',
       'f-150', '3500', 'caravan', 'van', 'dart', '2500', 'esv',
       'cutaway', 'el', 'edge', 'series', 'flex', 'srx', 'cab', 'pickup',
       'vehicl', 'trax', 'tahoe', 'suburban', 'cargo', 'drw', 'fiesta',
       'impala', 'soul', 'elantra', 'pioneer', 'trail', 'traverse',
       'country', 'sundance', 'road/street', 'nautilus', 'gx', 'q5',
       'gle', 'sportage', '5', 'sport', 'discovery', 'acadia', 'ghibli',
       'glc', 'e-class', 'truck', 'utility', 'limited', 'sl-class',
       'cx-3', '2500hd', 'sonic', 'corvette', 'mdx', 'xt5', 'fusion',
       'mustang', 'passenger', 'volt', 'spark', 'cruze', 'ld', 'journey',
       'transit', 'ranger', 'taurus', 'max', 'energi', 'expedition',
       'bus', 'ecosport', 'f-750', 'd', 'dr', 'hybrid', 'suv', 'connect',
       'f-650', 'sentra', 'altima', 'frontier', 'rogue', 'maxima',
       'versa', 'note', 'armada', 'pathfinder', 'titan', 'sedan', 'juke',
       'murano', 'xterra', 'kicks', 'xd', 'nvp']
    
    year_min = 1970
    year_max = 2021

    return [Car(random.choice(brands), random.choice(models), random.randint(year_min, year_max))
            for _ in range(n)]


    

def func1(cars):
    return [attrgetter('brand', 'model', 'year')(car) for car in cars]


def func2(cars):
    key_fn = attrgetter('brand', 'model', 'year')
    return [key_fn(car) for car in cars]


def func3(cars):
    return [(car.brand, car.model, car.year) for car in cars]

def func4(cars):
    key_fn = lambda car: (car.brand, car.model, car.year)
    return [key_fn(car) for car in cars]


if __name__ == '__main__':
    import timeit

    cars = generate_random_cars(100000)
    print(f'Number of cars: {len(cars)}' )

    for i in range(1, 5):
        elapsed = timeit.timeit(f'func{i}(cars)', globals=globals(), number=100)
        print(f'{i}: {elapsed:.2f} s')


    
