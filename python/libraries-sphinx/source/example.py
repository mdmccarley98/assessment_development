def send(message):
    """
    :param str message: Sends this message to the console.
    """
    print(message)


def param(func, args, type):
    return print

@param('message', 'Sends this message to the console.', 'str')
def send_1(message):
    print(message)


# @message str: Sends this message to the console.
def send_2(message):
    print(message)


def doc(param, description, type):
    return print

@doc(param='message', description='Sends this message to the console.', type='str')
def send_3(message):
    print(message)
