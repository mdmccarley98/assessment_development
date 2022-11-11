import re

str_regex ="[A-Z]*[a-zA-Z][0-9]*(=)[0-9][a-z]*[0-9]*"
print('{} {} {} {}'.                                        \
    format(                                                 \
        bool(re.fullmatch(str_regex, "ABCDEFm0=0ABCDEFm0")),\
        bool(re.fullmatch(str_regex, "abedQ0=Q0")),         \
        bool(re.fullmatch(str_regex, "g233230=0")),         \
        bool(re.fullmatch(str_regex, "T1=8aaaaaaaaaaaa"))))

str2_regex = "[12]?[0-9]{1,2}"
print('{} {} {} {}'.                                        \
    format(                                                 \
        bool(re.fullmatch(str2_regex, "267")),              \
        bool(re.fullmatch(str2_regex, "0267")),             \
        bool(re.fullmatch(str2_regex, "66")),               \
        bool(re.fullmatch(str2_regex, "567"))))            