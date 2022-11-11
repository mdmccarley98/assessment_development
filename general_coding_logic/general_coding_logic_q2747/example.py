def lessReverse(first_part, last_part):
    if len(first_part) != len(last_part):
        return False
    for i in range(len(first_part)):
        if first_part[len(first_part)-i-1] == last_part[i]:
            continue
        else:
            return first_part[len(first_part)-i-1] < last_part[i]
    return True

print(lessReverse("818","717")) 