// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(str: string): boolean {

  const alphabetLength = 26;

  if (str.length < alphabetLength) return false;

  let alphabetChecker = '';
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {

    if(str.charCodeAt(i) > 96 && 
      str.charCodeAt(i) < 123 &&
      !alphabetChecker.includes(str[i])) {
        alphabetChecker += str[i];
    }

    if((str.length - 1 - i) < alphabetLength - alphabetChecker.length) return false;
  }

  return alphabetChecker.length === alphabetLength;
}