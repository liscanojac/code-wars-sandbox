// https://www.codewars.com/kata/57241cafef90082e270012d8

export function cipher(message: string, keyword: string): string {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const cipheredAlphabet = String.prototype.concat(...new Set(keyword + alphabet));
  let cipheredWord = '';
  message = message.toLowerCase();

  for (let i = 0; i < message.length; i++) {

    if (!isAphabeticCharacter(message[i])) {
      cipheredWord += message[i];
      continue;
    }

    const alphabetIndex = alphabet.indexOf(message[i]);
    cipheredWord += cipheredAlphabet.charAt(alphabetIndex);
  }

  return cipheredWord;
}

function isAphabeticCharacter(character: string): boolean {

  return character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122
}