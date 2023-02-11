// https://www.codewars.com/kata/52c4dd683bfd3b434c000292

type HaskellReturn = 0 | 1 | 2;
type HaskellReturnObj = {
  match: 2;
  almost: 1;
  no_match: 0;
};


export function isInteresting(number: number, awesomePhrases: Array<number>): HaskellReturn {
  
  const haskellReturn: HaskellReturnObj = {
    match: 2,
    almost: 1,
    no_match: 0
  };
  if (number < 98) return haskellReturn.no_match;
  
  for (let i = number; i <= number + 2; i++) {

    if(i <= 99) continue;
    const interestingCheck = interestingChecker(i, awesomePhrases);
    if (interestingCheck) return i === number ? haskellReturn.match : haskellReturn.almost;
  }
  return haskellReturn.no_match;
}

function interestingChecker(num: number, awesomePhrases: Array<number>): boolean {

  const interestingFactors = {
    followedByZeroes: true,
    sameDigit: true,
    sequentialIncrementing: true,
    sequentialDecreasing: true
  };

  if (awesomePhrases.includes(num)) return true;

  if (palindromeChecker(num)) return true;
  
  const numStr = num.toString();

  const startingNum = numStr[0];

  for (let i = 1; i < numStr.length; i++) {

    if (interestingFactors.followedByZeroes) interestingFactors.followedByZeroes = numStr[i] === '0';
    
    if (interestingFactors.sameDigit) interestingFactors.sameDigit = startingNum === numStr[i];
    
    if (interestingFactors.sequentialIncrementing) interestingFactors.sequentialIncrementing = sequentialIncrementChecker(Number(numStr[i - 1]), Number(numStr[i]));
    
    if (interestingFactors.sequentialDecreasing) interestingFactors.sequentialDecreasing = sequentialDecreaseChecker(Number(numStr[i - 1]), Number(numStr[i]));

    if(!interestingFactors.followedByZeroes &&
      !interestingFactors.sameDigit &&
      !interestingFactors.sequentialIncrementing &&
      !interestingFactors.sequentialDecreasing) return false;
  }
  return true;
}

function palindromeChecker(num: number): boolean {
  const numStr = num.toString();
  const numLeftHalf = numStr.substring(0, Math.floor(numStr.length / 2));
  const numRightHalf = numStr.substring(Math.ceil(numStr.length / 2)).split('').reverse().join('');
  return numLeftHalf === numRightHalf;
}

function sequentialIncrementChecker(num1: number, num2: number): boolean {

  if (num1 === 9) return num2 === 0;

  return num1 > 0 && num2 === num1 + 1;
}

function sequentialDecreaseChecker(num1: number, num2: number): boolean {

  if (!num1) return num2 === 9;

  return num1 > 0 && num2 === num1 - 1;
}