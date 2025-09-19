/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // create the array 
    let result = []
    // loop through the proccess n number of times
    for (let i = 1; i <= n; i ++){
        // if i / 3 has a remainder of 0 OR if i / 5 has a remainder of 0 then 
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz'); //add 'fizzbuzz' to the array
            // if i / 3 has a remainder of 0
        } else if (i % 3 === 0){
            result.push('Fizz') // push 'fizz' to the array
            // if i / 5 has a remainder of 0
        } else if (i % 5 === 0){
            result.push('Buzz') // push buzz to the array 
        }
        // if non of those conditions are met then push i to the array.
        else {
            result.push(i)
        }
    }
    console.log(result) ;
}

fizzBuzz(30)