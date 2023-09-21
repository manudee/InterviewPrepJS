# bubble zeroes in an array to the end
# similar to bubble sort

def bubbleZerosEnd(arr):
    # set swapped as False by default
    swapped  = True

    while swapped:
        swapped = False
        for i in range(len(arr) - 1):
            if(arr[i] != 0 and arr[i+1] == 0 ):
                # swap
                arr[i],arr[i+1] = arr[i+1],arr[i]
                swapped = True

    return arr

val = bubbleZerosEnd([0,1,0,3,4,0,1,3,0])
print(val)