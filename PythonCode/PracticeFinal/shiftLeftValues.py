

def shiftLeftValuesByK(arr,k):
    # to address if len(arr) > k
    k = k % len(arr)
    print(arr)
    arr[:] = arr[k:] + arr[:k]
    return arr
val = shiftLeftValuesByK([1,2,3,4,5],2)        
print(val)




def shiftRightValuesByK(arr,k):
    # to address if len(arr) > k
    k = k % len(arr)
    print(arr)
    arr[:] = arr[-k:] + arr[:-k]
    return arr
val = shiftRightValuesByK([1,2,3,4,5],2)        
print(val)