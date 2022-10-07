// https://www.codewars.com/kata/51b66044bce5799a7f000003

const RomanNumerals = {
  symbols: {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
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
    if (this.symbols.hasOwnProperty(num)) return this.symbols[num];

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
      symbol: `${this.symbols[(this.quantityChecker[index].repeatable ? 
        this.quantityChecker[index].value : 
        this.quantityChecker[index - 1].value)]}${this.symbols[this.quantityChecker[index + 1].value]}`,
      value: this.quantityChecker[index + 1].value - (this.quantityChecker[index].repeatable ? this.quantityChecker[index].value : this.quantityChecker[index - 1].value)
    }
  },
  getRepeatedSymbols(num, index) {

    if (!this.quantityChecker[index].repeatable) {
      return {
        symbol: `${this.symbols[this.quantityChecker[index].value]}`,
        value: this.quantityChecker[index].value
      }
    }
    return {
      symbol: `${this.symbols[this.quantityChecker[index].value]}`.repeat(Math.floor(num / this.quantityChecker[index].value)),
      value: this.quantityChecker[index].value * Math.floor(num / this.quantityChecker[index].value)
    }
  }
}

module.exports = {
  RomanNumerals
}