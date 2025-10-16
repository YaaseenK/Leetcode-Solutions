let arr = ['a', 'b', 'c'];

for (let i = 0; i < 10; i ++){
    arr.push(i)
}
console.log(arr)

function shuff (arr) {
    for (i = arr.length - 1; i >= 0; i--){
        // console.log(arr[i])
        const j = randInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function randInt (maxExclusive){
    return Math.floor(Math.random() * maxExclusive)
}

console.log(shuff(arr))