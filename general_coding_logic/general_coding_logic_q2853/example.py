# Reduction of logical expression
for i in range(0, 8):
    is_car = bool(i & 1)
    has_spoiler = bool(i & 2)
    is_lowered = bool(i & 4)

    expr = ((not is_car and not has_spoiler) or (not is_car or not is_lowered))
    reducted = not (is_car and is_lowered)

    print(f'{int(is_lowered)} {int(has_spoiler)} {int(is_car)}: \
            {int(expr)} {int(reducted)}')
