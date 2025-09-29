
class Solution(object):
    def getConcatenation(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # find the length of nums 
        n = len(nums)
        # create a list double the orginal with placeholders
        ans = [0] * (2 * n)
        # loop the original list
        for i in range(n):
            # fills the frist part of the array with the items from the first array
            ans[i] = nums[i]
            # Populate the second half of the array with the same element
            # n + i shift the index into the second half of the array
            # example: if n = 3; i = 0; ans[3] = num[1]
            ans[i+n] = nums[i]
        return ans


s = Solution()
a = [1,2,3]
print(s.getConcatenation(a))