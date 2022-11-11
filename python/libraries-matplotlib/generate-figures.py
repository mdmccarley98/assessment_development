import matplotlib.pyplot as pyplot
import numpy as np

np.random.seed(19680801)
data = np.random.randn(2, 100)

pyplot.hist(data[0])
pyplot.title('Figure B')
pyplot.show()

pyplot.scatter(data[0], data[1])
pyplot.title('Figure D')
pyplot.show()

pyplot.plot(data[0], data[1])
pyplot.title('Figure A')
pyplot.show()

pyplot.hist2d(data[0], data[1])
pyplot.title('Figure C')
pyplot.show()
