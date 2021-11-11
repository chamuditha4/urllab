arr = []
with open("1.txt", 'r', encoding='UTF-8') as file:
    for line in file:
        arr.append(line.rstrip())

print(arr)