
matrix = [[1,2,3], [4,5,6], [7,8,9]]

def key(matrix):
    row_len = len(matrix[0])
    return [[row[i] for row in matrix] for i in range(row_len)]

def distractor1(matrix):
    row_len = len(matrix[0])
    return [[row[i] for i in range(row_len)] for row in matrix]


def distractor2(matrix):
    row_len = len(matrix[0])
    return [row[i] for i in range(row_len) for row in matrix]


def distractor3(matrix):
    row_len = len(matrix[0])
    return [row[i] for row in matrix for i in range(row_len)]

def main():
    print("KEY:", key(matrix))
    print("DISTRACTOR 1:", distractor1(matrix))
    print("DISTRACTOR 2:", distractor2(matrix))
    print("DISTRACTOR 3:", distractor3(matrix))

if __name__ == '__main__':
    main()
