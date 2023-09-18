# Frequency Counter / Multiple Pointers - areThereDuplicates
# Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
# and checks whether there are any duplicates among the arguments passed in.  
# You can solve this using the frequency counter pattern OR the multiple pointers pattern.
#
# Examples:
#
# areThereDuplicates(1, 2, 3) // false
# areThereDuplicates(1, 2, 2) // true
# areThereDuplicates('a', 'b', 'c', 'a') // true
# Restrictions:
#
# Time - O(n)
#
# Space - O(n)
#
# Bonus:
#
# Time - O(n log n)
#
# Space - O(1)

# using freq counter
def areThereDuplicates(*args):
    fc = {}
    for item in args:
        if item not in fc:
            fc[item] = 1
        else:
            return True
    return False


# false
val = areThereDuplicates(1,2,3)
print(val)

# true
val = areThereDuplicates(1,2,2)
print(val)

# true
val = areThereDuplicates('a','b','c','a')
print(val)


# using multiple pointers
def areThereDuplicatesMulPointer(*args):
    left = 0 
    right = 1

    sorted_args = sorted(args)
    print(sorted_args)

    while right < len(args):
        if(sorted_args[left] == sorted_args[right]):
            return True
        left += 1
        right += 1
    return False


val = areThereDuplicatesMulPointer(1,3,2,4,2)    
print(val)

val = areThereDuplicatesMulPointer(1,2,3,4,5)    
print(val)

val = areThereDuplicatesMulPointer('a','b','a','c','d','a')    
print(val)