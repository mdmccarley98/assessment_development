#!/bin/sh

mv main.py temp.py
python load.py || true
mv temp.py main.py