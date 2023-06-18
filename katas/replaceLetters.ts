// https://www.codewars.com/kata/5a4331b18f27f2b31f000085

function replaceLetters(word: string): string {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = ''

  for (let i = 0; i < word.length; i++) {

    const letterCharCode = word[i].charCodeAt(0);
    if (vowels.includes(word[i])) {
      result += letterCharCode > 97 ? String.fromCharCode(letterCharCode - 1) : 'z';
    } else {
      result += letterCharCode > 117 ? 'a' : vowels.find(vowel => vowel.charCodeAt(0) > letterCharCode);
    }
  }
  return result;
}