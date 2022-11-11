expr = input()
count = 0

for c in expr:
    if c == '(':
        count+=1
    elif (c == ')'):
        count-=1
    else:
        print("No ( or ) found")
        exit        

if count > 0:
    print(count, "open parenthesis not closed")
elif count < 0:
    print(abs(count), "closed parenthesis are loose")
else:
    print("All parenthesis closed")