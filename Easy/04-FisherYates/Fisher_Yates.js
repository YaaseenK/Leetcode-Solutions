// Create a sample array to test our shuffle
let arr = [1, 2, 3, 4, 5];

/**
 * Fisher–Yates shuffle using cryptographically secure random numbers.
 * Randomly rearranges elements of an array in place so every permutation
 * is equally likely.
 */
function shuffle(arr) {
  // Start from the end of the array and swap each element with a random earlier element.
    for (let i = arr.length - 1; i > 0; i--) {
    // Get a secure random integer j where 0 ≤ j ≤ i.
    // (i + 1) ensures the upper bound is exclusive since secureInt returns [0, maxExclusive)
    const j = secureInt(i + 1);

    // Swap arr[i] with arr[j] using destructuring assignment.
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // Print which random index was chosen (for debugging / illustration)
    console.log("Swapped index", i, "with", j);
    }

  // Return the shuffled array (modified in place)
    return arr;
}

// Run and print the shuffled array
console.log("Final shuffled result:", shuffle(arr));

/**
 * secureInt(maxExclusive)
 * Returns a uniformly distributed random integer between 0 (inclusive)
 * and maxExclusive (exclusive).
 * Uses Web Crypto API for secure randomness when available,
 * otherwise falls back to Math.random().
 */
function secureInt(maxExclusive) {
  // If the environment provides the Web Crypto API (modern browsers, Deno, etc.)
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    // Compute an upper limit multiple of maxExclusive to avoid modulo bias.
    // 0x100000000 = 2^32 = 4,294,967,296, the range of a 32-bit unsigned integer.
    const limit = Math.floor(0x100000000 / maxExclusive) * maxExclusive;

    // Create a 1-element typed array to hold a 32-bit unsigned random value.
    const buf = new Uint32Array(1);

    let x;
    do {
      // Fill buf[0] with a random 32-bit unsigned integer.
        crypto.getRandomValues(buf);
        x = buf[0];
      // Repeat if the number is outside the limit range (to remove bias).
    } while (x >= limit);

    // Map the random 32-bit number into the desired range [0, maxExclusive).
    return x % maxExclusive;
    }

  // Fallback if crypto is unavailable (e.g., some Node versions or old browsers)
  // Note: Math.random() is NOT cryptographically secure, but okay as a backup.
  return Math.floor(Math.random() * maxExclusive);
}
