import string
from collections import Counter


def get_most_frequent_letter(s):
    sorted_chars = sorted(Counter(s.lower()).most_common(), key=lambda x: (-x[1], x[0]))
    for ch, count in sorted_chars:
        if ch in string.ascii_letters:
            return ch
    return None


assert get_most_frequent_letter("abcC...") == "c"
assert get_most_frequent_letter("CasE InsEnSitIve") == "e"
assert get_most_frequent_letter("O.n.l.y c.o.u.n.t t.h.e l.e.t.t.e.r.s.") == "t"
assert get_most_frequent_letter("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante mauris, iaculis et nisi eget, laoreet tristique sapien.") == "i"
assert get_most_frequent_letter("Aenean odio ipsum, tempor feugiat condimentum sed, bibendum nec quam. Praesent faucibus risus non erat mattis fringilla.") == "e"
assert get_most_frequent_letter("") is None
assert get_most_frequent_letter("$$$") is None
assert get_most_frequent_letter("AAA") == "a"
assert get_most_frequent_letter("___") is None
