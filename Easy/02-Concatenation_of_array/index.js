/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // we will get thee length of nums
    let n = nums.length
    // using the Array constructor we can pre-allocate (2*n) space to a new array
    let ans = new Array(2*n)
    // loop through the original nums array
        for(let i = 0; i < n; i++){
            // fill the ans array with the original array 
            ans[i] = nums[i];
            // populate the second half of the array with same element
            // n + i shifts the index into the second half of the array. 
            // example: if n=3; i=0 -> ans[3] = num[i]
            ans[i] = num[i]
        }
        console.log(ans)
    }

nums1 = [1,2,3,4]
getConcatenation(nums1)