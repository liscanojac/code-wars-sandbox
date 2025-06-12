interface NumericObject {
  [i: string]: number
};

export function getCommonDivisor(numericArray: Array<number>): number {

  let commonDivisor = 1;

  for (let i = numericArray[0]; i > 1; i--) {
    const divisor = i;
    const isCommonDivisor = evaluateDivisor(numericArray, divisor);
    if (isCommonDivisor) {
      commonDivisor = divisor;
      break;
    };
  }
  return commonDivisor;
}

function evaluateDivisor(arr: Array<number>, divisor: number): boolean {
  return arr.every((value) => value % divisor === 0);
}

export class PirateCode {
  str: string;
  arr: Array<string> = [];
  numericArray: Array<number> = [];
  constructor(code: string) {
    this.str = code;
    this.setVariables();
  }

  private setVariables() {
    let currentCodeElement = this.str[0];
    const numericObject: NumericObject = {};

    for (let i = 1; i < this.str.length; i++) {
      const currentChar = this.str[i];
      if (this.addsToCodeElement(currentCodeElement, currentChar)) {
        currentCodeElement += currentChar;
        continue;
      }
      this.arr.push(currentCodeElement);
      if (isNumeric(currentCodeElement)) numericObject[currentCodeElement] = Number(currentCodeElement);
      currentCodeElement = currentChar;
    }
    this.arr.push(currentCodeElement);
    if (isNumeric(currentCodeElement)) numericObject[currentCodeElement] = Number(currentCodeElement);
    this.numericArray = Object.values(numericObject);
  }
  private addsToCodeElement(codeElement: string, char: string): boolean {
    return isNumeric(char) && isNumeric(codeElement) || !isNumeric(char) && !isNumeric(codeElement);
  }
}

export function isNumeric(code: string): boolean {
  return !isNaN(parseFloat(code)) && !isNaN(Number(code));
}

export function getTreasureCode(code: string): string {

  const treasureCode = new PirateCode(code);
  const codeArray = treasureCode.arr.slice();
  const commonDivisor =  getCommonDivisor(treasureCode.numericArray);

  if (commonDivisor > 1) {
    codeArray.forEach((code, index) => {
        if (isNumeric(code)) codeArray[index] = (Number(code) / commonDivisor).toString();
    })
  }

  return codeArray.join('');
}