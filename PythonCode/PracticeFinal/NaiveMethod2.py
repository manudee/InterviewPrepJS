

# method 2
def same1(arr1,arr2):
    if len(arr1) != len(arr2):
         return False
# loop through arr1
    for i in range(len(arr1)):
       valIndex = arr2.index(arr1[i] ** 2)
       if (valIndex == -1):
           return False
       arr2.remove(arr1[i] ** 2)
    return True
# find the index of arr1 sq element in arr2 and remove arr2's index
    # if it does not exist return false
    # else return true

# Test True
arr1 = [1,2,3]
arr2 = [4,9,1]

# Test False
arr1 = [1,2,3,4]
arr2 = [4,9,1]

# Test True
arr1 = [1,2,2,4]
arr2 = [4,1,4,16]
val = same1([1,2,3],[4,9,1])
print(val)
val = same1([1,2,3,4],[4,9,1])
print(val)
val = same1([1,2,2,4],[4,1,4,16])
print(val)
