const longestSequence = (arr) => {
  if (arr.length === 0) return 0

  // Using set to manipulate Array values without creating a new one
  const nums = new Set(arr)
  let discardedNums = {}
  let max = 1

  for (const num of nums.values()) {
    let counting = true
    next = num + 1
    nums.delete(num)
    while (counting) {
      counting = false
      while (nums.has(next)) {
        nums.delete(next++)
      }
      if (discardedNums[next]) {
        counting = nums.has((next += discardedNums[next]))
      }
    }
    max = Math.max((discardedNums[num] = next - num), max)
  }
  return max
}

// Use console.time and .timeEnd to check the execution time ellapsed

console.time('Example #2')
console.log(longestSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.timeEnd('Example #2')
