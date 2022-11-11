def make_tree(s):
    from collections import defaultdict
    tree = defaultdict(list)
    for r in s.split(','):
        src = r[0]
        assert r[1:3] == '->'
        dest = r[-1]
        tree[src].append(dest)
    return s[0], tree


def visit(node, tree, count):
    if not tree[node]:
        return count
    return min(visit(child, tree, count + 1) for child in tree[node])

def shortest_path(s):
    root, tree = make_tree(s)
    return visit(root, tree, 1)




CASES = [
["A->B,A->C,B->D"], 2,


["1->2,2->3,3->4,2->3"], 4,


["C->D"], 2,



["4->2,4->6,2->1,6->3,6->9,3->0,3->8"], 3,


["4->2,3->0,3->8,4->6,2->1,6->3,6->9"], 3,


["A->B,A->C"], 2,


["A->B,A->C,C->D"], 2,
]

for i in range(0, len(CASES), 2):
    arg, = CASES[i]
    expected = CASES[i+1]
    actual = shortest_path(arg)

    print('FT'[actual == expected], arg, actual, expected)

