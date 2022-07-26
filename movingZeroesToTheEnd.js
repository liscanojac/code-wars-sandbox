// https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript
function movingZeroes(arr) {

  const resultArr = [];
  const zeroesArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
      zeroesArr.push(0);
      continue;
    }
    resultArr.push(arr[i]);
  }

  return resultArr.concat(zeroesArr);
}