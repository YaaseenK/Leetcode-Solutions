const characterCodes = Array.from({length: 26}, (_, i) => i + 97);

let arr = {
    numbers: Array.from({length: 10}, (_, i) => String(i)), 
    lowerCase: characterCodes.map(code => String.fromCharCode(code)),
    upperCase: characterCodes.map(code => String.fromCharCode(code).toUpperCase()),
    
}




/* [ <26 empty items> ] */





const containsNumbner = true;
const containsLowerCase = true;
const containsUpperCase = true;

const pools = [];