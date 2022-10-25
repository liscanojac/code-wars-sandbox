// https://www.codewars.com/kata/56a1c074f87bc2201200002e

function smaller(nums) {

  const result = [];

  for (let i = 0; i < nums.length; i++) {

    let counter = 0;

    for (let j = i + 1; j < nums.length; j++) {

      if (nums[i] > nums[j]) counter++
    }
    result.push(counter)
  }
  return result;
}

function smaller2(arr) {

  const uniqueValues = [...new Set(arr)];
  uniqueValues.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length; i++) {

    let counter = 0;
    let j = i + 1;
    let k = arr.length - 1;
    if(arr[i] === uniqueValues[0]) {

      result.push(counter);
      continue;
    }
    while (j < k) {
      if (arr[i] > arr[j]) counter++
      if (arr[i] > arr[k]) counter++
      j++;
      k--;
    }
    if(j === k && arr[i] > arr[j]) counter++
    result.push(counter);
  }
  return result;
}

module.exports = {
  smaller,
  smaller2
}