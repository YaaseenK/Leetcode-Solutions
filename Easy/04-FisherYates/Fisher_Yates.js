let arr = [1, 2, 3, 4, 5];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // console.log(i)
        const j = secureInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
        console.log(j)

    }
    return arr;
}

console.log(shuffle(arr))

function secureInt(maxExclusive) {
    // Returns an int in [0, maxExclusive)
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      // Rejection sampling to avoid modulo bias
      const limit = Math.floor(0x100000000 / maxExclusive) * maxExclusive;
        const buf = new Uint32Array(1);
        let x;
        do {
        crypto.getRandomValues(buf);
        x = buf[0];
        } while (x >= limit);
        return x % maxExclusive;
    }
    // Fallback (less secure): Math.random
    return Math.floor(Math.random() * maxExclusive);
}