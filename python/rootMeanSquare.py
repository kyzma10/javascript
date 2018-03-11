import math

def rootMeanSquare(arr):
    sum = 0
    for el in arr:
        sum += math.pow(el, 2)

    return math.sqrt(sum / len(arr))

'''examples'''
print(rootMeanSquare([1, 3, 2]))
print(rootMeanSquare([1, 3, 2, 7, 6, 5]))
print(rootMeanSquare([-4, 5, -8, 2]))
