// https://www.codewars.com/kata/5a00a8b5ffe75f8888000080

export function replaceZeroes(arr: Array<1 | 0>): number {
  const zeroesReplacedArr = arr.join('').split('0');
  const counter = {
    longestStreak: {
      length: 0,
      index: 0
    },
    index: zeroesReplacedArr[0].length
  }
  
  for (let i = 1; i < zeroesReplacedArr.length; i++) {
    let currentStreak = zeroesReplacedArr[i - 1].length + zeroesReplacedArr[i].length;
    if (currentStreak >= counter.longestStreak.length) {
      counter.longestStreak.length = currentStreak;
      counter.longestStreak.index = counter.index;
    }
    counter.index += zeroesReplacedArr[i].length + 1;
  }
  return counter.longestStreak.index;
}
