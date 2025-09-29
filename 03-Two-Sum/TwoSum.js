/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    let n = nums.length
    let t = target
    
    for (let i = 0; i < n; i++){
        map.set(nums[i], i)
    }
    console.log(map)
} 