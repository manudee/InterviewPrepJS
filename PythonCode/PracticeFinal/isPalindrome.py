
class Solution:
    def isPalindrome(self, x: int) -> bool:




        # convert the number into a string
        # loop through the string to compare 1st char with last, 2nd with 2nd last
            # if all match till midpoint of the array True
            # else false


        # convert int to string
        # reverse a string
        # match reversed with original

        # input = str(x)
        #
        # for i in range(0,int(len(input))):
        #     if input[i] != input[len(input) - i - 1]:
        #         return False
        #     else:
        #         return False
        #

        word = str(x)
        start = 0
        end = len(word) - 1

        while start < end:
        # If characters at the pointers don't match, it's not a palindrome
            if word[start] != word[end]:
                return False

            # Move the pointers inward
            start += 1
            end -= 1

        return True

val = Solution()
dataVal = val.isPalindrome(121)
print(dataVal)


dataVal = val.isPalindrome(-121)
print(dataVal)

dataVal = val.isPalindrome(11122)
print(dataVal)

dataVal = val.isPalindrome(20033002)
print(dataVal)
