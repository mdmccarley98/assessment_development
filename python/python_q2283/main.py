import logging
logging.basicConfig(level=logging.INFO)

def my_import(name, globals, locals, fromlist, level):
    logging.info(f'Importing {name}')
    return orig_import(name, globals, locals, fromlist, level)

# Does nothing
orig_import, __import__ = __import__, my_import
print(globals())

import json
import os

# Does nothing
import importlib
orig_import, importlib.__import__ = importlib.__import__, my_import

import json
import pathlib

# This is SyntaxError
#orig_import, import = import, my_import

# Works
import builtins
orig_import, builtins.__import__ = builtins.__import__, my_import

import json
import re
importlib.import_module('sys') # doesn't use builtins.__import__