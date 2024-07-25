// https://www.codewars.com/kata/5ca24526b534ce0018a137b5

interface KeyData {
  whitespace: boolean;
  uppercase: boolean;
  alphabetic: boolean;
  numeric: boolean;
  special: boolean;
  key: number | '*' | '#';
  strokes: number;
}

function sendMessage( message: string): string {
  
  let capsOn = false;
  let typedMessage = '';

  for (let i = 0; i < message.length; i++) {
    
    const currChar = getKeyData(message[i]);

    if(currChar.alphabetic && ((currChar.uppercase && !capsOn) || (!currChar.uppercase && capsOn))) {
      typedMessage += '#';
      capsOn = !capsOn;
    }
    
    const lastCharacter = typedMessage.slice(-1);
    
    if(lastCharacter === `${currChar.key}`) typedMessage += ' ';
    
    if (currChar.whitespace) {
      typedMessage += '0';
      continue;
    }
    typedMessage += `${currChar.key}`.repeat(currChar.strokes);

    if(currChar.numeric || currChar.special) typedMessage += '-'
  }
  return typedMessage;
} 

function isUpperCase(char: string): boolean {
  return getCharCode(char) > 64 && getCharCode(char) < 91;
}

function isAlphabetic(char: string): boolean {
  return isUpperCase(char) || (getCharCode(char) > 96 && getCharCode(char) < 123);
}

function isNumeric(char: string): boolean {
  return !isNaN(Number(char));
}

function isSpecialCharacter(char: string): char is '*' | '#' {
  return char === '*' || char === '#';
}

function getCharCode(char: string): number {
  return  char.charCodeAt(0);
}

function getKeyData(char: string): KeyData {

  const keyData: KeyData = {
    uppercase: false,
    alphabetic: false,
    whitespace: char === ' ',
    numeric: isNumeric(char),
    special: isSpecialCharacter(char),
    key: 0,
    strokes: 1
  };

  if (keyData.whitespace) return keyData;

  if(keyData.numeric) {
    keyData.key = Number(char);
    return keyData;
  }

  if (isSpecialCharacter(char)) {
    keyData.key = char;
    return keyData;
  }

  keyData.uppercase = isUpperCase(char);
  keyData.alphabetic = isAlphabetic(char);
  
  if (keyData.alphabetic) {
    const alphabet = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const charCode = getCharCode(char.toLowerCase());
    const letterNum = charCode - 96;

    switch(letterNum) {
      case 16:
        keyData.key = (Math.floor(letterNum / 3.25)) + 3;
        break;
      case 26:
        keyData.key = (Math.floor(letterNum / 3.25)) + 1;
        break;
      default:
        keyData.key = (Math.floor(letterNum / 3.25)) + 2;
    };

    keyData.strokes += alphabet[keyData.key - 2].indexOf(char.toLowerCase());

    return keyData;
  }

  const symbols = "'-+=.,?!";
  const symbolIndex = symbols.indexOf(char);

  if (symbolIndex > -1) {
    keyData.key = symbolIndex > 3 ? 1 : '*';
    keyData.strokes += symbolIndex > 3 ? symbolIndex - 4 : symbolIndex;
  }
  return keyData;
}

export {
  sendMessage,
  getKeyData
}