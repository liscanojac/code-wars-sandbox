// https://www.codewars.com/kata/56f4ff45af5b1f8cd100067d

interface NumberNameElement {
  n: number;
  name: string
}

function getNumberName(n: number): string {

  const nameHelper = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  ];
  if (n > 999) return 'invalid number';

  if (n > 9) {
    let firstDigit = Number(n.toString()[0]);

    if (n > 99) {
      if (n - (firstDigit * 100)) {
        return `${nameHelper[0][firstDigit]} hundred ${getNumberName(n - (firstDigit * 100))}`;
      }
      return `${nameHelper[0][firstDigit]} hundred`;
    }
    if (n > 19) {
      if (n - (firstDigit * 10)) {
        return `${nameHelper[2][Math.floor((n / 10) - 2)]} ${getNumberName(n - (firstDigit * 10))}`;
      }
      return nameHelper[2][(n / 10) - 2];
    }
    return nameHelper[1][n - 10];
  }
  return nameHelper[0][n];
}

function sortNumberNames(numArr: Array<number>): Array<number> {

  const numAndNameArr: Array<NumberNameElement> = numArr.map(num => ({
    n: num,
    name: getNumberName(num)
  }));

  numAndNameArr.sort((a, b) => a.name.localeCompare(b.name));

  return numAndNameArr.map(el => el.n);
}

export {
  getNumberName,
  sortNumberNames
}