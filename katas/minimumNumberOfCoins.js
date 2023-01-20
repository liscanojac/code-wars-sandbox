// https://www.codewars.com/kata/557f138eb472f5caa7000062

function minCoins(amount) {
  
  const invalidInput = "Invalid input - enter a positive amount of money";
  const amountChecked = amountChecker(amount);

  if (!amountChecked.valid) return invalidInput;

  amount = amountChecked.formattedAmount;
  const notes = getValidNotesAndCoins(amount);
  const iterations = getIterations(amount, notes);
  const combination = getCombinations(iterations, notes);

  return getOutput(combination);
}

function amountChecker(amount) {
  const result = {
    formattedAmount: 0,
    valid: false
  };

  const currencyValidator = {
    pounds: (amount) => amount.charAt(0) === '£' && !isNaN(Number(amount.substring(1))),
    pence: (amount) => amount.charAt(amount.length - 1) === 'p' && !isNaN(Number(amount.substring(0, amount.length - 1))),
    pounds_and_pence: (amount) => {
      let numericAmount = amount.substring(0, amount.length - 1);
      numericAmount = numericAmount.substring(1);
      console.log(numericAmount)
      return amount.charAt(0) === '£' && amount.charAt(amount.length - 1) === 'p' && !isNaN(Number(numericAmount))
    }
  }

  function stringNumberValid(amount) {
    return !isNaN(Number(amount)) && amount.charAt(0) !== '.';
  }

  function decimalValid(amount) {
    return !isNaN(Number(amount.charAt(0))) && !isNaN(Number(amount.charAt(amount.length - 1)));
  }

  if (Number.isFinite(amount)) {
    result.valid = Number(amount).toFixed(2) * 1 > 0;
    result.formattedAmount = Number(amount).toFixed(2) * 1;
    return result;
  }

  if(typeof amount !== 'string') return result;

  if(stringNumberValid(amount)) {
    result.valid = Number(amount).toFixed(2) * 100 > 0;
    result.formattedAmount = Number(amount) === Math.floor(Number(amount)) ? Number(amount) : Number(amount).toFixed(2) * 100;
    return result;
  }

  if(currencyValidator.pence(amount)) {
    amount = amount.replace('p', '');

    result.valid = Number(amount) * 1 > 0 && decimalValid(amount);
    result.formattedAmount = amount.includes('.') ? Number(amount).toFixed() * 100 : Number(amount).toFixed() * 1;
    return result;
  }

  if(currencyValidator.pounds(amount)) {
    amount = amount.replace('£', '');

    result.valid = Number(amount).toFixed(2) * 100 > 0 && decimalValid(amount);
    result.formattedAmount = Number(amount).toFixed(2) * 100;
    return result;
  }

  if(currencyValidator.pounds_and_pence(amount)) {
    amount = amount.replace('£', '');
    amount = amount.replace('p', '');

    result.valid = Number(amount).toFixed(2) * 100 > 0 && decimalValid(amount);
    result.formattedAmount = Number(amount).toFixed(2) * 100;
    return result;
  }
  return result;
}

function getValidNotesAndCoins(amount) {

  const brittishNotes = [1, 2, 5, 10, 20, 50, 100, 200];

  return brittishNotes.filter(note => note <= amount);
}

function getIterations(money, notes) {

  const iterations = Array.from(Array(notes.length), () => [0]);

  for (let i = 0; i < notes.length; i++) {

    for (let j = 1; j <= money; j++) {

      if (!i) {
        iterations[i].push(j / notes[i])
      } else {

        if (notes[i] > j) {
          
          iterations[i].push(iterations[i-1][j]);
        } else {
          iterations[i].push(Math.min(iterations[i-1][j], 1 + iterations[i][j - notes[i]]))
        }
      }
    }
  }

  return iterations;
}

function getCombinations(iterations, notes) {

  let pointer = iterations[iterations.length - 1][iterations[0].length - 1];
  let i = iterations.length - 1;
  let j = iterations[0].length - 1;
  const combination = {
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
    arr: []
  }
  
  while(pointer) {
    
    if (i > 0 && pointer === iterations[i-1][j]) {
      pointer = iterations[i-1][j];
      i--;
      continue;
    }
    if (!combination.arr.includes(notes[i])) combination.arr.push(notes[i]);
    combination[notes[i]]++
    j = j - notes[i];
    pointer = iterations[i][j]
  }
  return combination;
}

function getOutput(combination) {
  
  let output = '';

  if (combination.arr.length === 1) {
    return `${combination[combination.arr[0]]} ${combination.arr[0] >= 100 ? `£${combination.arr[0] / 100}` : `${combination.arr[0]}p`} ${combination[combination.arr[0]] > 1 ? 'coins' : 'coin'}`;
  }
  
  for (let i = 0; i < combination.arr.length; i++) {
    
    if (i === combination.arr.length - 1) {
      output += " and ";
    } else if (i) {
      output += ", "
    }
    
    output += `${combination[combination.arr[i]]} ${combination.arr[i] >= 100 ? `£${combination.arr[i] / 100}` : `${combination.arr[i]}p`} ${combination[combination.arr[i]] > 1 ? 'coins' : 'coin'}`;
  }
  return output;
}

module.exports = {
  minCoins,
  amountChecker,
  amountChecker
}