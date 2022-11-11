"""
Both YES:
- toplevel non-objects
- last repeated key is kept

Python YES, JS NO:
- Infinity, NaN (in defiance of standard)
- More than 15-17 digits of precision



"""

import json


print(json.dumps(float('-0')))
print(json.dumps(float('inf')))
print(json.dumps(12345678901234567890))
print(json.dumps('\u005C'))
print(json.dumps('\\'))