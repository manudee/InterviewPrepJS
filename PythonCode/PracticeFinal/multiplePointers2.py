# Multiple Pointers - countUniqueValues
# Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
#
# countUniqueValues([1,1,1,1,1,2]) // 2
# countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
# countUniqueValues([]) // 0
# countUniqueValues([-2,-1,-1,0,1]) // 4

# i = 0 , j = 1 (j loops through the array till the end)
# compare the two values
    # if eq move j up by 1
    # else move i up by 1 and replace a[i] = a[j]

def countUniqueValues(arr1):

    if(len(arr1) == 0 ):
        return 0

    i = 0
    for j in range(len(arr1)):
        if(arr1[i] == arr1[j]):
            j += 1
        else:
            i += 1
            arr1[i] = arr1[j]

    return i+1







val = countUniqueValues([1,1,1,1,1,2])
# val = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
# val = countUniqueValues([])
# val = countUniqueValues([-2,-1,-1,0,1])
print(val)


