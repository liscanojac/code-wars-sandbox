// https://www.codewars.com/kata/5208f99aee097e6552000148

function breakCamelCase(str: string): string {

  if (isLowerCase(str)) return str;

  let resultStr = ''

  for (let i = 0; i < str.length; i++) {

    resultStr += isCharCodeUppercase(str.charCodeAt(i)) ? ` ${str[i]}` : str[i];
  }
  return resultStr;
}

function  isLowerCase(str: string): boolean {
  return str === str.toLowerCase();
}

function isCharCodeUppercase(charCode: number): boolean {
  return charCode > 64 && charCode < 91;
}