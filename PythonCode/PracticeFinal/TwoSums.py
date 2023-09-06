
# nums = [2,7,5,3]
# target = 9


nums = [0,1,5]
target = 5

class Solution:
    def twoSum(self, nums, target: int):
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                s = nums[i] + nums[j]
                if s == target:
                    return [i, j]


solution1 = Solution()
print(solution1.twoSum(nums,target))