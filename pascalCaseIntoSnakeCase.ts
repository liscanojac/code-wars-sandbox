// https://www.codewars.com/kata/529b418d533b76924600085d

export function toUnderscore(string: String | Number): String {

  string = string.toString();

  let snakeCaseString = string[0].toLowerCase();

  for (let i = 1; i < string.length; i++) {

    if (isAnUpperCaseLetter(string.charCodeAt(i))) {

      snakeCaseString += `_${string[i].toLowerCase()}`;
      continue;
    }
    snakeCaseString += string[i];
  }
  return snakeCaseString;
}

function isAnUpperCaseLetter(charCode: Number): Boolean {

  return charCode >= 65 && charCode <= 90 
}