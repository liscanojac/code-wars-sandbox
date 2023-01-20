// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

function multiply(a, b) {

  const strings = {
    shorter: "",
    longer: "",
  };

  const product = {
    operations: [],
    remaining: 0,
    currentOperation: "",
    getOperationsSum: () => {
      const maxLength = product.operations[product.operations.length - 1].length - 1;
      let result = '';
      let remaining = 0;

      for (let i = 0; i <= maxLength; i++) {
        let sum = product.operations[0][product.operations[0].length - 1 - i] ? Number(product.operations[0][product.operations[0].length - 1 - i]) : 0;
        for (let j = 1; j < product.operations.length; j++) {
          sum += product.operations[j][product.operations[j].length - 1 - i] ? Number(product.operations[j][product.operations[j].length - 1 - i]) : 0; 
        }
        sum += remaining;
        sum = sum.toString();
        if (sum.length === 1 || i === maxLength) {
          result = sum + result;
          remaining = 0;
        } else {
          result = sum.slice(-1) + result;
          remaining = Number(sum.slice(0, -1));
        }
      }
      return result;
    }
  }

  if (!Number(a) || !Number(b)) return "0";

  if (a.length < 11 && b.length < 11) return (Number(a) * Number(b)).toString();
  
  a = formatString(a);
  b = formatString(b);

  strings.shorter = b.length < a.length ? b : a;
  strings.longer = a.length > b.length ? a : b;
  let k = 0;

  for (let i = strings.shorter.length - 1; i >= 0; i--) {

    for (let j = strings.longer.length - 1; j >= 0; j--) {

      const currentProduct = ((Number(strings.shorter[i]) * Number(strings.longer[j])) + product.remaining).toString();

      if (currentProduct.length === 1 || j === 0) {
        product.currentOperation = currentProduct + product.currentOperation;
        product.remaining = 0;
      } else {
        product.currentOperation = currentProduct.substring(1) + product.currentOperation;
        product.remaining = Number(currentProduct.substring(0, 1));
      }
    }
    if (Number(product.currentOperation)) {
      product.operations.push(product.currentOperation + "0".repeat(k));
    }
    k++;
    product.currentOperation = "";
  }
  return product.getOperationsSum();
}

function firstNonZeroIndex(n) {

  for (let i = 0; i < n.length; i++) {

    if (n[i] !== "0") return i;
  }
  return n.length;
}

function formatString(n) {

  const nonZeroIndex = firstNonZeroIndex(n);

  if (nonZeroIndex === n.length) return "";

  return n.substring(nonZeroIndex);
}

module.exports = {
  multiply
}