import weakref

class Dispatcher:
    def __init__(self):
        self.refs = []

    def register(self, listener):
        raise NotImplementedError
    
    def dispatch(self):
        for ref in self.refs:
            callable = ref()
            if callable is not None: callable()

class Listener:
    def on_event(self): 
        print(f'Hello from {id(self)}')


register_methods = [
    # Raises exception because Listener is not callable.
    lambda self, listener: self.refs.append(weakref.ref(listener)),

    # Never calls on_event because the bound method is GC'd immediately
    lambda self, listener: self.refs.append(weakref.ReferenceType(listener.on_event)),

    # Holds strong reference to listener - refs accumulate
    lambda self, listener: self.refs.append(listener.on_event),

    # Correct
    lambda self, listener: self.refs.append(weakref.WeakMethod(listener.on_event))
]

for i, meth in enumerate(register_methods):
    print('\n\n', i)
    Dispatcher.register = meth
    p = Dispatcher()
    for i in range(5):
        print(f'start of iteration {i}')
        obj = Listener()
        p.register(obj)
        try:
            p.dispatch()
        except Exception as e:
            print(e)
        print('Deleting')
        del obj
        try:
            p.dispatch()
        except Exception as e:
            print(e)
        print(f'end of iteration {i}')