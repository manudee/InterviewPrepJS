# merge two sorted arrays

# arr1 = [20,40,44,23]
# arr2 = [50,6,7]

import math

def merge(arr1,arr2):
    arr1Ptr = 0 
    arr2Ptr = 0 

    sorted = []
    while(arr1Ptr < (len(arr1)) and arr2Ptr < (len(arr2))):
        if(arr1[arr1Ptr] < arr2[arr2Ptr]):
            sorted.append(arr1[arr1Ptr])
            arr1Ptr += 1
        else:
            sorted.append(arr2[arr2Ptr])
            arr2Ptr += 1
    
    while(arr1Ptr < (len(arr1))):
        sorted.append(arr1[arr1Ptr])
        arr1Ptr += 1

    while(arr2Ptr < (len(arr2))):
        sorted.append(arr2[arr2Ptr])
        arr2Ptr += 1


    return sorted


def sort(arr):
    if(len(arr) <= 1): 
        return arr

    mid = math.floor(len(arr)/2)
    print(mid)
    left = sort(arr[:mid])
    right = sort(arr[mid:])
    return merge(left,right)


# val =     merge([20,40,44,90],[50,60,70])
# val =     mergeSorted([1,10,50],[2,14,99,100])
val =     sort([20,40,1,44,90])

print(val)

