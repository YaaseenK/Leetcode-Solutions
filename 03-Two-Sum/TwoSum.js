/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    const map = new Map()
    let n = nums.length
    let t = target
    
    for (let i = 0; i < n; i++){
        map.set(nums[i], i)
    }

    for (let i = 0; i < n; i++ ){
        const complement = t - nums[i]  
        // console.log('i right now:'  + i )
        console.log('complement: ' + map.get(complement))
        if(map.has(complement) && map.get(complement) !== i){
            return console.log('completment:' + complement + ' i:' + nums[i])
        }
        
    }


} 

let aray = [5, 6, 8, 9, -4, 7 , 3]
let target = 10
twoSum(aray, target)