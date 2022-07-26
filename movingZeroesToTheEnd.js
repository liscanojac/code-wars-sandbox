// https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript
function movingZeroes(arr) {

  const resultArr = [];
  let zeroesCounter = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {

      zeroesCounter++;
      continue;
    }
    resultArr.push(arr[i]);
  }

  if (zeroesCounter > 0) {

    const zeroesArr = new Array(zeroesCounter).fill(0);

    return resultArr.concat(zeroesArr);
  }
  return resultArr;
}