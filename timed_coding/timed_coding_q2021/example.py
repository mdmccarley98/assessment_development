def _start(s, days, index):
    gapsize = 0
    for c in s[index:]:
        if c == 'X':
            if days > 0:
                days -= 1
            else:
                break
        gapsize += 1
    return gapsize

def largest_clearing(s, days):
    counts = [_start(s, days, i) for i in range(len(s))]
    return counts.index(max(counts))


def run(inp, expected, comment):
    actual = largest_clearing(*inp)
    if actual != expected:
        print(inp, expected, actual)
    else:
        print('OK')

run(['___', 3], 0, 'No boulders to clear.')
run(['XX_', 1], 1, 'Would remove middle boulder.')
run(['XX_X_X_X_X', 3], 2, 'Clearing starts with an opening.')
run(['XXXX_X_XX_', 2], 3, 'Clearing starts with a boulder.')
run(['_X_', 1], 0, 'Clears entire wall.')
run(['_______X', 1], 0, 'Clears entire wall, bigger.')
run(['X_X', 0], 1, 'Zero days just finds the index of largest opening.')
run(['XXXXXXX', 1], 0, 'Completely obstructed.')
run(['XXXXXXX', 8], 0, 'Days longer than wall.')
run(['XXXXX_X', 2], 3, 'Clears two before existing opening.')
run(['_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXX_XXXXXX', 50], 42, 'Large example.')


