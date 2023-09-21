# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

def longestCommonPrefix(arr):
   prefix = arr[0]

   for strVal in arr[1:]:
    # print(strVal)
    i = 0 
    while(i < len(prefix) and i < len(strVal) and prefix[i] == strVal[i]):
        i += 1
    # print("i is",i)
    prefix = prefix[:i]
    # print("prefix is", prefix)

    if not prefix:
        return " "
    
    return prefix

val = longestCommonPrefix(["flower","flow","flight"])
print(val)

val = longestCommonPrefix(["cat","hello","flight"])
print(val)