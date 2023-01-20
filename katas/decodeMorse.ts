// https://www.codewars.com/kata/54b724efac3d5402db00065e
import { morseCodeToAlphabet } from "../morse/morseCode";

export const decodeMorse = function(morseCode: String): String {

  let morseDecoded = '';
  const morseCodeArr = morseCode.trim().split(' ');

  for (let i = 0; i < morseCodeArr.length; i++) {

    if (!morseCodeArr[i] && !morseCodeArr[i - 1]) morseDecoded += ' '
    if (morseCodeToAlphabet[morseCodeArr[i]]) morseDecoded += morseCodeToAlphabet[morseCodeArr[i]];
  }

  return morseDecoded;
}