// https://www.codewars.com/kata/55c6126177c9441a570000cc

function orderWeight(strng) {

  if (!strng.trim()) return '';
  
  const strngArray = strng.split(' ');
  const weightSorted = [];

  for (let i = 0; i < strngArray.length; i++) {

    const currentWeight = {
      value: '',
      sum: 0
    };

    currentWeight.value = strngArray[i].trim();

    currentWeight.sum = currentWeight.value.split('').reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
      0
    );

    weightSorted.push(currentWeight);
  }

  weightSorted.sort((a, b) => {
    if (a.sum === b.sum) return a.value > b.value ? 1 : -1;
    return a.sum - b.sum;
  });

  return weightSorted.reduce(
    (accumulator, currentWeight) => (accumulator.value || accumulator) + ' ' + currentWeight.value
  );
}

module.exports = {
  orderWeight
}