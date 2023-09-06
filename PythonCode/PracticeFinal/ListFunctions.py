nums = [11,2,13,12,1,14,24,35,56,78]

# append
nums.append(20)
print(nums)

# index
print("index without start and end")
val  = nums.index(12)
print(val)

print("index with start and end")
val  = nums.index(12,0,5)
print(val)

# print("index with start and end no number found")
# val  = nums.index(12,5,9)
# print(val)
#

# remove
nums.remove(2)
print(nums)

print(nums.reverse())

stringVal = 'asdkjahdkhja'
listChar1 = []
listChar1[0:-1:1] = stringVal
print(listChar1)