import pickle

with open('file.pickle', 'rb') as f:
    print(pickle.load(f))