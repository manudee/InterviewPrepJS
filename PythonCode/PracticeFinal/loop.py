nums = [1,2,3,4,5]
dictVal = {'a': 1, 'b':23,'c':12}


for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        if(nums[i] > nums[j]):
            temp = nums[i]


for key in dictVal:
    print(key)
    print(dictVal[key])


for val in dictVal.items():
    print(val)

