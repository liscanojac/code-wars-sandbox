// https://www.codewars.com/kata/585db3e8eec141ce9a00008f

export function reverseVowels(str: string): string {

  const strVowels = str.split('').filter(letter => isVowel(letter));

  if(!strVowels.length) return str;
  let resultStr = ''
  for (let i = 0; i < str.length; i++) {

    if (isVowel(str[i])) {
      resultStr += strVowels.pop();
      continue;
    }
    resultStr += str[i];
  }
  return resultStr;
}

function isVowel(letter: string): boolean {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return vowels.includes(letter.toLowerCase());
}