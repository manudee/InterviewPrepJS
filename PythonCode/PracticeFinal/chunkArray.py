

#chunk array 
#[1,2,3,4,5],3 ---> [1,2,3], [4,5]
#[1,2] -> 2  --> [1,2]
#[1,2,3,4,5,6], 8 --> [1,2,3,4,5,6]


def chunkArray(arr, size):
    chunked = []

    for val in arr:
        # Check if chunked is empty or if the last chunk is of the desired size
        if not chunked or len(chunked[-1]) == size:
            chunked.append([val])
        else:
            chunked[-1].append(val)
    
    return chunked


val = chunkArray([1,2,3,4,5,7,8,9,9,9,10],3)
print(val)

arr2 = [[1,2],[3,4]]
print(arr2[-1])
arr2[-1].append(6)
print(arr2)



if not arr2:
    print('arr2 empty')
