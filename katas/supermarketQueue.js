// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, numberOfCashiers) {

  const timeConsumedByCashiers = new Array(numberOfCashiers).fill(0)

  for (let j = 0; j < customers.length; j++) {

    let smallestCashierTimeIndex = getSmallestValueIndex(timeConsumedByCashiers)

    timeConsumedByCashiers[smallestCashierTimeIndex] = timeConsumedByCashiers[smallestCashierTimeIndex] + customers[j]
  }

  const maxTimeConsumed = Math.max.apply(null, timeConsumedByCashiers)

  return maxTimeConsumed;
}

function getSmallestValueIndex(arr) {

  let lowestIndex = 0;

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] < arr[lowestIndex]) {
      lowestIndex = i
    }
  }
  return lowestIndex
}

console.log(queueTime([10,2,3,3], 2))
console.log(queueTime([2,3,10], 2))
console.log(queueTime([], 1))
console.log(queueTime([1,2,3,4,5], 100))

// @ale solution
function queue_time(customers, numberOfCashiers) {
  const tills = new Array(numberOfCashiers).fill(0)
  for (let i = 0; i < customers.length; i++) {
    tills[0] += customers[i]
    tills.sort((a, b) => a - b)
  }
  return Math.max.apply(null, tills)
}