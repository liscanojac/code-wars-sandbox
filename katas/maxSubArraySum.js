// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

function maxSequence(arr) {

  let maxValue = 0;

  for (let i = 0; i < arr.length - 1; i++) {

    let iterationMaxValue = arr[i];
    let accumulator = arr[i];

    for (let j = i + 1; j < arr.length; j++) {

      accumulator += arr[j]
      
      if (accumulator > iterationMaxValue) {
        iterationMaxValue = accumulator;
      }
    }
    if (iterationMaxValue > maxValue) {
      maxValue = iterationMaxValue;
    }
  }
  return maxValue;
}