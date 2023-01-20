// https://www.codewars.com/kata/52dd72494367608ac1000416/train/javascript

function isPrime(number) {

  if (number === 2 || number === 3) return true;

  if (number < 2 || number % 2 === 0 || number % 3 === 0) return false;
  if (number > 5 && number % 5 === 0) return false;
  
  const lastDigit = number.toString()[number.toString().length - 1];
  const forbiddenLastDigits = [0, 2, 4, 6, 8];

  if (forbiddenLastDigits.includes(Number(lastDigit))) return false;

  const sumOfDigits = number.toString().split('').reduce((accumulator, value) => {
    return Number(accumulator) + Number(value)
  }, 0);

  if (sumOfDigits % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {

    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
}

function getPrimes(start, finish) {

  const primes = [];

  if (start === finish) return primes;

  const min = Math.min(start, finish);
  const max = Math.max(start, finish);

  for (let i = min; i <= max; i++) {

    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

module.exports = {
  isPrime,
  getPrimes
}