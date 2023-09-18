#
#
# Multiple Pointers - isSubsequence
# Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
# In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
#
# Examples:
#
# isSubsequence('hello', 'hello world'); // true
# isSubsequence('sing', 'sting'); // true
# isSubsequence('abc', 'abracadabra'); // true
# isSubsequence('abc', 'acb'); // false (order matters)
# Your solution MUST have AT LEAST the following complexities:
#
# Time Complexity - O(N + M)
#
# Space Complexity - O(1)

def isSubsequence(str1,str2):
    strPtr1 = 0 
    strPtr2 = 0 

    while(strPtr1 < len(str1) and strPtr2 < len(str2)):
        if(str1[strPtr1] == str2[strPtr2]):
            strPtr1 += 1
        strPtr2 += 1
    
    return strPtr1 == len(str1)


val = isSubsequence('hello', 'hello world')
print(val)

val = isSubsequence('sing', 'sting')
print(val)

val = isSubsequence('abc', 'abracadabra')
print(val)

val = isSubsequence('abc', 'acb')
print(val)