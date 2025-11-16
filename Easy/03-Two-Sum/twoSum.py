from typing import List

nums = [2, 7, 11, 15]
target = 13

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            hashmap[nums[i]] = i
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap and hashmap[complement] != i:
                return [i, hashmap[complement]]
#         # If no valid pair is found, return an empty list
#         return []
        return hashmap

# # Create an instance of the Solution class
solution = Solution()

# Call the twoSum method using the solution instance
print(solution.twoSum(nums, target))
