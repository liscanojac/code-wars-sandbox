// https://www.codewars.com/kata/52223df9e8f98c7aa7000062
import { CharacterType } from "../interfaces/rot13";

function rot13(str: string): string {

  let resultStr = '';

  for (let i = 0; i < str.length; i++) {

    const currentCharacter = characterValidator(str.charCodeAt(i));

    if (!currentCharacter.isAlphabetic) {
      resultStr += str.charAt(i);
      continue;
    }

    resultStr += String.fromCharCode(currentCharacter.upperHalf ? 
                                      str.charCodeAt(i) + 13 :
                                      str.charCodeAt(i) - 13);
  }
  return resultStr;
}

function characterValidator(charCode: number): CharacterType {

  const characterType: CharacterType = {
    isAlphabetic: (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122),
    upperHalf: (charCode >= 65 && charCode < 78) || (charCode < 110 && charCode >= 97)
  }

  return characterType;
}

export {
  rot13
}