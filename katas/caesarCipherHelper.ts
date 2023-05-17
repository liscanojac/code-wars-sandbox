// https://www.codewars.com/kata/526d42b6526963598d0004db

export class CaesarCipher {
  private readonly shift: number;
  constructor (n: number) {
    this.shift = n
  }
  encode(message: string): string {
    if (!this.isShiftValid) return message;
    message = message.toUpperCase();
    return this.stringLoop(message, this.encodingShift.bind(this));
  };
  decode(code: string): string {
    if (!this.isShiftValid) return code;
    return this.stringLoop(code, this.decodingShift.bind(this));
  };
  private stringLoop(
      str: string, 
      shiftingFunction: (charCode: number) => number
    ): string {

    let result = '';
    for (let i = 0; i < str.length; i++) {

      if (this.isAnUpperCaseLetter(str.charCodeAt(i))) {
        result += String.fromCharCode(shiftingFunction(str.charCodeAt(i)));
        continue;
      }
      result += str.charAt(i);
    }
    return result;
  };
  private isAnUpperCaseLetter(charCode: number): boolean {
    return charCode >= 65 && charCode <= 90;
  };
  private isShiftValid(): boolean {
    return this.shift > 0 && this.shift < 27;
  };
  private encodingShift(charCode: number): number {

    if (charCode > (90 - this.shift)) {
      return (charCode - (90 - this.shift)) + 64;
    }
    return charCode + this.shift; 
  };
  private decodingShift(charCode: number): number {

    if (charCode < (65 + this.shift)) {

      return 90 - (this.shift - (charCode - 64));
    }
    return charCode - this.shift;
  }
}

interface Character {
  isAlphabetic: boolean;
  isUpperCase: boolean;
  code: number;
  original: string;
}

export class SecondVariationCaesarCipher {
  private readonly shift: number;
  constructor (n: number) {
    this.shift = n
  }
  encode(message: string): string {
    return this.messageLoop(message, this.encodingShift.bind(this));
  };
  // decode(messages: Array<string>): string {

  // };
  private getLetterCode(letter: string): number {
    return letter.charCodeAt(0);
  };
  private getLetterFromCode(letterCode: number): string {
    return String.fromCharCode(letterCode);
  };
  private isAlphabetic(letterCode: number): boolean {
    return (letterCode >= 97 && letterCode <= 122) || (letterCode >= 65 && letterCode <= 90);
  };
  private isUpperCase(letterCode: number): boolean {
    return letterCode >= 65 && letterCode <= 90;
  };
  private validateCharacter(letter: string): Character {

    const letterCode = this.getLetterCode(letter);
    return {
      isAlphabetic: this.isAlphabetic(letterCode),
      isUpperCase: this.isUpperCase(letterCode),
      code: letterCode,
      original: letter
    }
  };
  private encodingShift(character: Character): string {

    if (!character.isAlphabetic) return character.original;

    if (character.code > ((character.isUpperCase ? 90 : 122) - this.shift)) {
      return this.getLetterFromCode((character.code - ((character.isUpperCase ? 90 : 122) - this.shift)) + (character.isUpperCase ? 64 : 96));
    }
    return this.getLetterFromCode(character.code + this.shift);
  };
  private messageLoop(
    message: string,
    shiftingFunction: (character: Character) => string
  ): string {

    let resultMessage = '';

    for (let i = 0; i < message.length; i++) {

      resultMessage += shiftingFunction(validateCharacter(message[i]))
    }
    return resultMessage;
  }
}

function getLetterCode(letter: string): number {

  return letter.charCodeAt(0);
}

function getLetterFromCode(letterCode: number): string {
  return String.fromCharCode(letterCode);
}

function isAlphabetic(letterCode: number): boolean {
  return (letterCode >= 97 && letterCode <= 122) || (letterCode >= 65 && letterCode <= 90);
}

function isUpperCase(letterCode: number): boolean {
  return letterCode >= 65 && letterCode <= 90;
}

function validateCharacter(letter: string): Character {

  const letterCode = getLetterCode(letter);

  return {
    isAlphabetic: isAlphabetic(letterCode),
    isUpperCase: isUpperCase(letterCode),
    code: letterCode,
    original: letter
  }
}

function encodingShift(character: Character, shift: number): string {

  if (!character.isAlphabetic) return character.original;

  if (character.code > ((character.isUpperCase ? 90 : 122) - shift)) {
    return getLetterFromCode((character.code - ((character.isUpperCase ? 90 : 122) - shift)) + (character.isUpperCase ? 64 : 96));
  }
  return getLetterFromCode(character.code + shift);
}

function decodingShift(character: Character, shift: number): string {

  if (!character.isAlphabetic) return character.original;

  if (character.code < ((character.isUpperCase ? 65 : 97) + shift)) {
    return getLetterFromCode((character.isUpperCase ? 90 : 122) - (shift - (character.code - (character.isUpperCase ? 64 : 96))))
  }
  return getLetterFromCode(character.code - shift);
}

function getPrefix(firstLetter: string, shift: number): string {

  const firstLetterLowerCase = firstLetter.toLowerCase();

  return firstLetterLowerCase + encodingShift(validateCharacter(firstLetterLowerCase), shift);
}

function getShift(prefix: string): number {
  const firstLetterCode = getLetterCode(prefix[0]);
  const secondLetterCode = getLetterCode(prefix[1]);

  if (firstLetterCode > secondLetterCode) {
    return (122 - firstLetterCode) + (secondLetterCode - 96);
  }
  return secondLetterCode - firstLetterCode;
}

function messageLoop(message: string, shift: number, shiftingFunction: (character: Character, shift: number) => string) {

  let resultMessage = ''

  for (let i = 0; i < message.length; i++) {

    resultMessage += shiftingFunction(validateCharacter(message[i]), shift);
  }
  return resultMessage;
}

function splitMessage(message: string): Array<string> {

  const numRunners = 5;
  const messageChunks: Array<string> = [];
  const chunkSize = Math.ceil(message.length / numRunners);

  for (let i = 0, j = 0; i < numRunners; i++, j += chunkSize) {
    const chunk = message.substring(j, j + chunkSize);
    if (chunk) messageChunks.push(chunk);
  }

  return messageChunks;
}

export function encode(message: string, shift: number): Array<string> {

  if (!shift) return splitMessage(message);

  const encodedMessage = getPrefix(message[0], shift) + messageLoop(message, shift, encodingShift);

  return splitMessage(encodedMessage);
}

export function decode(messageChunks: Array<string>): string {

  const codedMessage = messageChunks.join('');

  return messageLoop(codedMessage.substring(2), getShift(codedMessage.substring(0, 2)), decodingShift);
}