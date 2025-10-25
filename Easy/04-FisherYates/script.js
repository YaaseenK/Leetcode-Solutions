const characterCodes = Array.from({length: 26}, (_, i) => i + 97);

let arr = {
    numbers: Array.from({length: 10}, (_, i) => String(i)), 
    lowerCase: characterCodes.map(code => String.fromCharCode(code)),
    upperCase: characterCodes.map(code => String.fromCharCode(code).toUpperCase()),
    
}




/* [ <26 empty items> ] */


function secureInt(maxExclusive) {
    // checks to see if crypto is available and to see if .getRandomValues() method is available
    // crypto is a web API that gives access to cryptographically secure random numbers.
    // is secure method to gen random values and is less predictable than Math.Random()
    if (typeof crypto !== "undefined" && crypto.getRandomValues){
        /*  0x100000000 is 2^32, which is 4,294,967,296 in decimal.
            4,294,967,296 is the max number represented by a 32-bit unsigned interger
            2^32 - 1 = 4,294,967,295
        */
        const limit = Math.floor(0x100000000 / maxExclusive) * maxExclusive; // The divides 4,294,967,295 by maxExclusive then floors. then multiplies it by the maxExclusive
        // console.log(limit);

        const buf = new Uint32Array(1);
        let x;
        do { 
            crypto.getRandomValues(buf)
            x = buf[0]
            // console.log(x)
        }while( x >= limit);

        return x % maxExclusive;
    }
}


console.log(secureInt(12));

const containsNumbner = true;
const containsLowerCase = true;
const containsUpperCase = true;

const pools = [];

