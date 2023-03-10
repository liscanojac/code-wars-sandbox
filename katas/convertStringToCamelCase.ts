// https://www.codewars.com/kata/517abf86da9663f1d2000003

export function toCamelCase(str: string): string {

  const separator = {
    hyphen: '-',
    underscore: '_',
    counter: 0
  };

  let camelCaseStr = '';
  let currentWord = '';
  str += '-'

  for (let i = 0; i < str.length; i++) {

    if (str[i] === separator.hyphen || str[i] === separator.underscore) {
      
      camelCaseStr += separator.counter ? 
      `${currentWord[0].toUpperCase()}${currentWord.substring(1)}` : 
      currentWord;
      separator.counter++;
      currentWord = '';
      continue;
    }
    currentWord += str[i];
  }
  return camelCaseStr;
}