arr1 = [1,2,3]
arr2 = [4,9,1]

arr1 = [1,2,3,2]
arr2 = [4,9,4,1]

arr1 = [1,2,3,2,5]
arr2 = [4,9,4,1]

freqCnter1 = {}
freqCnter2 = {}

def same(arr1,arr2):
    if len(arr1) != len(arr2):
        return False

    for val in arr1:
        freqCnter1[val] = (freqCnter1.get(val,None) or 0 ) + 1

    for val in arr2:
        freqCnter2[val] = (freqCnter2.get(val,None) or 0 ) + 1

    for key in freqCnter1:
        if(key ** 2 not in freqCnter2):
            return False
        if freqCnter2[key ** 2] != freqCnter1[key]:
            return False
    print(freqCnter1)
    print(freqCnter2)
    return True




# print(same([1,2,3],[4,9,1])) # True
print(same([1,2,3,2],[4,9,1,4])) # True
# print(same([1,2,3,5,6],[4,9,1])) # False
# print(same([1,2,2],[4,9,1])) # False

