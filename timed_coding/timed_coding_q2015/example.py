def has_liberty(s, x, y, ours, seen):
    #print(x, y, ours, seen)
    if (x, y) in seen:
        return False
    ncol = len(s[0])
    if x < 0 or x >= ncol:
        return False
    if y < 0 or y >= len(s):
        return False
    seen.add((x, y))
    assert s[y][x] in '.BW', s[y][x]
    if s[y][x] == '.':
        return True
    if s[y][x] != ours:
        return False
    
    next = [(x+1, y), (x-1, y), (x, y+1), (x, y-1)]
    return any(
        has_liberty(s, x2, y2, ours, seen) for x2, y2 in next
    )

def is_captured(s, pos):
    #print('is_captured:\n', s, pos)
    y, x = pos
    s = s.split('\n')
    return not has_liberty(s, x, y, s[y][x], set())


# %%
CASES = [
    ["...\n.B.\n...",[1,1]], False,


    [".W.\nWBW\n.W.",[1,1]], True,

    ["...\nWBW\n.W.",[1,1]], False,


    ["...\nWBW\n.W.",[0,1]], False,


    ["WWWWW\nWBBBW\nWB.BW\nWBBBW\nWWWWW",[1,1]], False,


    [".WWW.\nWBBW.\n.WBW.\n.WBW.\n..W..",[1,1]], True,


    ["..W\n.WB\n..W",[1,2]], True,


    ["..W\n.WB\n..W",[0,2]], False,

    
    [".BW\nBWW\n.BW",[1,1]], True,


    [".BW\nBWW\n.B.",[1,1]], False,

    ["BBB\nBBB\nBBB",[1,1]], True,

    ["....\n..BW\n..WB\n..WB", [2, 3]], True
]


for i in range(0, len(CASES), 2):
    args = CASES[i]
    expected = CASES[i+1]
    actual = is_captured(*args)
    print('FT'[actual == expected], args, 'expected:', expected, 'actual:', actual)
    #print(args[0])

    if actual != expected:
         actual = is_captured(*args)
 
