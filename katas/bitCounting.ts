// https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = function(n: number): number {

  return n.toString(2).split('0').join('').length;
}

export {
  countBits
}