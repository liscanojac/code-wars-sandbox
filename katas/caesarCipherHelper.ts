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
