// https://www.codewars.com/kata/59c7e477dcc40500f50005c7

export function isOddHeavy(sample: Array<number>): boolean {
  
  const filteredArray = {
    odd: sample.filter((element) => element % 2),
    even: sample.filter((element) => !(element % 2))
  }
  if (!filteredArray.odd.length) return false;
  if (!filteredArray.even.length) return true;

  const lowestOddValue = filteredArray.odd.sort((a, b) => a - b)[0];
  const highestEvenValue = filteredArray.even.sort((a, b) => b - a)[0];
  
  return lowestOddValue > highestEvenValue;
}