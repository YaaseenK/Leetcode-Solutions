class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        # made a results array
        results = []
        # created a for loop with range class (start at 1, end at n + 1 because it finishs before the end number)
        for i in range(1, n + 1):
            # checks to see if i is divisible by 3 or 5 and if true then append "FizzBuzz"
            if i % 3 == 0 and i % 5 == 0:
                results.append("FizzBuzz")
                # checks to see if i is divisable by 3
            elif i % 3 == 0:
                results.append("Fizz")
            # checks to see if i is divisable by 5
            elif i % 5 == 0:
                results.append("Buzz")
            else: results.append(str(i))
        
        return results

s = Solution()
print(s.fizzBuzz(30))