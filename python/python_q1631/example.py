import sys, os

import mod as mod1
mod1.val = 6

import mod.submod as submod1
submod1.subval = 12

sys.path.insert(0, os.path.join('mod'))

import mod as mod2
mod2.val = 7

import submod as submod2
submod2.subval = 13

import mod

print(mod.val)
print(mod.submod.subval)
