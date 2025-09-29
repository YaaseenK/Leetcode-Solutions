/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Creating a map
    const map = new Map()
    // n is the length of the arry ( delete later to free up memory)
    let n = nums.length
    //  t is the target value (del later for memeory)
    let t = target
    
    // loop through the length of the array
    for (let i = 0; i < n; i++){
        map.set(nums[i], i)  // set the keys and values to our map
    }
    // for loop to itterate through the length of the array
    for (let i = 0; i < n; i++ ){
        const complement = t - nums[i]  // *x + y = t WRITTEN as x = t - y* 
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