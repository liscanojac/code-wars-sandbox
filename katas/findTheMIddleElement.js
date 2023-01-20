// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

function gimme(triplet) {

  const tripletSorted = triplet.slice().sort((a, b) => a - b)

  return triplet.findIndex(element => element === tripletSorted[1])
}

console.log(gimme([2, 3, 1]))