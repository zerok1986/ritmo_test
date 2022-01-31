const numOfSandwiches = (tomatoSlices, cheeseSlices) => {
  const sandwichesArr = []

  // If tomatoSlices is even, we couldn't make sandwiches without remaining ingredients
  if (tomatoSlices % 2 !== 0) return sandwichesArr

  const halfTomatoSlices = tomatoSlices / 2
  const bigSandwiches = halfTomatoSlices - cheeseSlices
  const smallSandwiches = cheeseSlices * 2 - halfTomatoSlices

  // If no ingredients remaining, push the actual result to sandwArr
  if (bigSandwiches >= 0 && smallSandwiches >= 0) {
    sandwichesArr.push(bigSandwiches, smallSandwiches)
  }

  return sandwichesArr
}

console.log(numOfSandwiches(16, 7))
console.log(numOfSandwiches(17, 4))
console.log(numOfSandwiches(4, 17))
