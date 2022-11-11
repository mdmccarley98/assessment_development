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

src_a = compile("""
key_fn = lambda car: car.year
sorted(cars, key=key_fn)
""", '<string>', 'exec')

src_b = compile("""
def key_fn(car): return car.year
sorted(cars, key=key_fn)
""", '<string>', 'exec')


if __name__ == '__main__':
    import dis
    print('src_a:\n\n ', dis.dis(src_a))
    print('src_b:\n\n', dis.dis(src_b))

    cars = generate_random_cars(200000)


    import timeit
    n = 100
    elapsed = timeit.timeit('eval(src_a)', globals=globals(), number=n)
    print(elapsed)

    elapsed = timeit.timeit('eval(src_b)', globals=globals(), number=n)
    print(elapsed)
    
