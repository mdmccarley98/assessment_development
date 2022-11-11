from urllib.request import urlopen
EXCITING_NEW_VERSION = 'Python 4.0'
with urlopen('https://www.python.org/downloads/') as res:
    for line in res:
        if EXCITING_NEW_VERSION in str(line):
            print("THE NEW", EXCITING_NEW_VERSION, "IS AVAILABLE FOR DOWNLOAD")
            exit(0)
exit(1)
