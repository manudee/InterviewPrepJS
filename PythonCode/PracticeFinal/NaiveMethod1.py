


# loop through arr1
    # get the 1st element and look for its sq in arr2, if exists remove the arr2 sq element and arr1 element
    # keep going till you exhaust the list
    # check if arr1 and arr2 both empty , return true
       # else return false




def same(arr1,arr2):
    if len(arr1) != len(arr2):
         return False


    # loop through arr1
    for i in range(len(arr1)):
        # check arr1 squared element exists in arr2
        # if it does , remove the matched elements from both arrays
        i = 0
        if(arr1[i] ** 2 in arr2):
            print("i=",i, "arr1[{}]=".format(i),arr1[i])
            print("arr1 before removal", arr1)
            print("arr2 before removal", arr2)
            arr2.remove(arr1[i] ** 2)
            print("arr2 after removal", arr2)
            arr1.remove(arr1[i])
            print("arr1 after removal", arr1)

            #
    if(arr1 == [] and arr2 == []):
        return True
    else:
        return False






# Test 1
val = same([1,2,3],[4,9,1])
print(val)
# Test 2
val = same([1,2,3,4],[4,9,1])
print(val)
# Test 3
val = same([1,2,2,4],[4,1,4,16])
print(val)
# Test 4
val = same([],[])
print(val)
# Test 5
val = same([1],[1,4])
print(val)