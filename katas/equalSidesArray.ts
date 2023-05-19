// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

export function arrayEqualSidesIndex(arr: Array<number>): number {

  const totalSum = arr.reduce((accumulator, item) => accumulator + item, 0);
  if (!totalSum) return totalSum;
  if (totalSum === arr[0]) return 0;
  if (totalSum === arr[arr.length - 1]) return arr.length - 1;
  
  for (let i = 1, accumulator = arr[0]; i < arr.length - 1; accumulator += arr[i], i++) {
    if (accumulator === totalSum - arr[i] - accumulator) return i;
  }
  return -1;
}