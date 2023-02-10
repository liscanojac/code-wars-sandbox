// https://www.codewars.com/kata/52c4dd683bfd3b434c000292

type HaskellReturn = 0 | 1 | 2;
type HaskellReturnObj = {
  match: 2;
  almost: 1;
  no_match: 0;
};

const haskellReturn: HaskellReturnObj = {
  match: 2,
  almost: 1,
  no_match: 0
};

export function isInteresting(number: number, awesomePhrases: Array<number>): HaskellReturn {

  const interestingNumber = {
    followedByZeroes: true,
    sameDigit: true,
    sequentialIncrementing: true,
    sequentialDecreasing: true,
  };

  const awesomePhrasesCheck = awesomePhrasesChecker(number, awesomePhrases);
  if (awesomePhrasesCheck) return awesomePhrasesCheck;

  const palindromeCheck = palindromeChecker(number);
  if (palindromeCheck) return palindromeCheck;
  
  const numStr = number.toString();

  const startingNum = numStr[0];

  for (let i = 1; i < numStr.length; i++) {

    if (interestingNumber.followedByZeroes) interestingNumber.followedByZeroes = numStr[i] === '0';

    if (interestingNumber.sameDigit) interestingNumber.sameDigit = startingNum === numStr[i];

    if (interestingNumber.sequentialIncrementing) interestingNumber.sequentialIncrementing = sequentialIncrementChecker(Number(numStr[i - 1]), Number(numStr[i]));

    if (interestingNumber.sequentialDecreasing) interestingNumber.sequentialDecreasing = sequentialDecreaseChecker(Number(numStr[i - 1]), Number(numStr[i]));
  }
}

function awesomePhrasesChecker(num: number, awesomePhrases: Array<number>): HaskellReturn {

  for (let i = 0; i < awesomePhrases.length; i++) {

    if (awesomePhrases[i] === num) return haskellReturn.match;
    if (num < awesomePhrases[i] && num >= awesomePhrases[i] - 2) return haskellReturn.almost;
  }
  return haskellReturn.no_match;
}

function palindromeChecker(num: number): HaskellReturn {

  for (let i = num; i <= num + 2; i++) {

    const numStr = i.toString();

    const halfNumLength = numStr.length / 2;

    const numLeftHalf = numStr.substring(0, Math.floor(halfNumLength));
    const numRightHalf = numStr.substring(Math.ceil(halfNumLength)).split('').reverse().join('');

    if (numLeftHalf === numRightHalf) {
      if (i === num) return haskellReturn.match;
      return haskellReturn.almost;
    }
  }
  return haskellReturn.no_match;
}

function sequentialIncrementChecker(num1: number, num2: number): boolean {

  if (num1 === 9) return num2 === 0;

  return num2 === num1 + 1;
}

function sequentialDecreaseChecker(num1: number, num2: number): boolean {

  if (!num1) return num2 === 9;

  return num2 === num1 - 1;
}