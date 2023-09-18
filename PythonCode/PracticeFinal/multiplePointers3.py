# Multiple Pointers - countUniqueValues
# Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
#
# countUniqueValues([1,1,1,1,1,2]) // 2
# countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
# countUniqueValues([]) // 0
# countUniqueValues([-2,-1,-1,0,1]) // 4

def countUniqueValues(arr1):

    if(len(arr1) == 0 ):
        return 0

    freCnter1 = {}

    for val in arr1:
        freCnter1[val] = (freCnter1.get(val) or 0 ) + 1

    cnter = 0

    print(freCnter1)

    for key,val in freCnter1.items():
        if val != 0:
            cnter += 1

    print(cnter)
    return cnter



# val = countUniqueValues([1,1,1,1,1,2])
# val = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
# val = countUniqueValues([])
val = countUniqueValues([-2,-1,-1,0,1])
print(val)


