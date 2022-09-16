// https://www.codewars.com/kata/5511b2f550906349a70004e1

function lastDigit(str1, str2) {

  if (!Number(str2)) return 1;

  const baseNumber = Number(str1.substring(str1.length - 1));

  const sameLastDigitAsBaseNumber = [0, 1, 5, 6];

  if (sameLastDigitAsBaseNumber.includes(baseNumber)) return baseNumber;

  let powerNumber = (Number(str2.substring(str2.length - 2)) % 4) || 4;

  const result = (baseNumber ** powerNumber).toString()

  return Number(result.substring(result.length - 1));
}
