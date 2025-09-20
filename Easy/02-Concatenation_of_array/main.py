from typing import List
class Solution(object):
    def getConcatenation(self, nums: List[int]) -> List[int]:
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # find the length of nums 
        n = len(nums)
        # create a list double the orginal with placeholders
        ans = [0] * (2 * n)
        for i in range(n):
            ans[i] = nums[i]
            ans[i+n] = nums[i]
            return ans


s = Solution()
a = [1,2,3]
print(s.getConcatenation(a))