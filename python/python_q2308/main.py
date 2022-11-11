import mymodule

if __name__ == '__main__':
    import pickle
    with open('file.pickle', 'wb') as f:
        pickle.dump(mymodule.MyClass(10), f)