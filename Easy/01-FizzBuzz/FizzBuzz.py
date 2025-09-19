class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        results = []
        for i in range(1, n + 1):
            if i % 3 == 0 and i % 5 == 0:
                results.append("FizzBuzz")
            else: results.append(i)
        
        print(results)

    fizzBuzz(10, 30)