#
# Frequency Counter - sameFrequency
# Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
#
# Your solution MUST have the following complexities:
#
# Time: O(N)
#
# Sample Input:
#
# sameFrequency(182,281) // true
# sameFrequency(34,14) // false
# sameFrequency(3589578, 5879385) // true
# sameFrequency(22,222) // false


def freqCounter(num1,num2):
    # convert the numbers to string
    # create objects with key value pairs for each digit
    # compare the two objects to ensure the given key's value is same in both
        # if yes, return true
        # else return false

    num1Str = str(num1)
    num2Str = str(num2)

    if( len(num1Str) != len(num2Str)):
        return False

    freCounter1 = {}
    freCounter2 = {}

    # o(n)
    for val in num1Str:
        freCounter1[val] = (freCounter1.get(val,None) or 0 ) + 1

    # o(n)
    for val in num2Str:
        freCounter2[val] = (freCounter2.get(val, None) or 0) + 1

    print(freCounter1)
    print(freCounter2)

    for key in freCounter1:
        if(key not in freCounter2):
            return False
        if(freCounter1[key] != freCounter2[key]):
            return False

    return True


val = freqCounter(182,281)
print(val)
val = freqCounter(34,14)
print(val)
val = freqCounter(3589578, 5879385)
print(val)
val = freqCounter(22,222)
print(val)


