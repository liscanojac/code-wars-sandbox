// https://www.codewars.com/kata/51b66044bce5799a7f000003

const RomanNumerals = {
  romanSymbols: {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  },
  arabic: {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  },
  quantityChecker: [
    {
      value: 1,
      repeatable: true
    },
    {
      value: 5,
      repeatable: false
    },
    {
      value: 10,
      repeatable: true
    },
    {
      value: 50,
      repeatable: false
    },
    {
      value: 100,
      repeatable: true
    },
    {
      value: 500,
      repeatable: false
    },
    {
      value: 1000,
      repeatable: true
    }
  ],
  toRoman(num) {
    if (!num) return '';
    if (this.romanSymbols.hasOwnProperty(num)) return this.romanSymbols[num];

    if (num < 4000) {

      let indexHelper = (this.quantityChecker.findIndex(({ value }) => value > num)) - 1;
      if (indexHelper < 0) indexHelper = this.quantityChecker.length - 1;
      const currentCharacter = this.isSpecialCharacter(num, indexHelper) ? this.getSpecialCharacter(indexHelper) : this.getRepeatedSymbols(num, indexHelper);
      
      const remainder = num - currentCharacter.value;
      if (!remainder) {
        return currentCharacter.symbol;
      }
      return currentCharacter.symbol + this.toRoman(remainder);
    }
    return this.toRoman(Math.floor(num / 1000)) + this.toRoman(num % 1000)
  },
  isSpecialCharacter(num, index) {
    if (index === this.quantityChecker.length - 1) return false;
    return num >= (this.quantityChecker[index + 1].value - (this.quantityChecker[index].repeatable ? this.quantityChecker[index].value : this.quantityChecker[index - 1].value));
  },
  getSpecialCharacter(index) {
    return {
      symbol: `${this.romanSymbols[(this.quantityChecker[index].repeatable ? 
        this.quantityChecker[index].value : 
        this.quantityChecker[index - 1].value)]}${this.romanSymbols[this.quantityChecker[index + 1].value]}`,
      value: this.quantityChecker[index + 1].value - (this.quantityChecker[index].repeatable ? this.quantityChecker[index].value : this.quantityChecker[index - 1].value)
    }
  },
  getRepeatedSymbols(num, index) {

    if (!this.quantityChecker[index].repeatable) {
      return {
        symbol: `${this.romanSymbols[this.quantityChecker[index].value]}`,
        value: this.quantityChecker[index].value
      }
    }
    return {
      symbol: `${this.romanSymbols[this.quantityChecker[index].value]}`.repeat(Math.floor(num / this.quantityChecker[index].value)),
      value: this.quantityChecker[index].value * Math.floor(num / this.quantityChecker[index].value)
    }
  },
  fromRoman(romanNumber) {
    if(this.arabic.hasOwnProperty(romanNumber)) return this.arabic[romanNumber]

    let result = [];
    for (let i = 0; i < romanNumber.length; i++) {

      result.push(this.arabic[romanNumber[i]])
      if (i > 0 && result[i] > result[i - 1]) {
        result[i - 1] = -1 * result[i - 1];
      }
    }
    return result.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
  }
}

module.exports = {
  RomanNumerals
}