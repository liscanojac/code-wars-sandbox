// https://www.codewars.com/kata/546d15cebed2e10334000ed9

function solveExpression(exp) {

  const expArray = exp.split('=');
  
  const operation = expArray[0];

  const operationType = getOperationType(operation);
  const operands = getOperands(operation, operationType);
  operands.push(expArray[1]);
  const possibleSolutions = getPossibleSolutions(operands, exp);
  // console.log(operands);

  const solver = {
    '+': (operands) => operands[0] + operands[1] === operands[2],
    '-': (operands) => operands[0] - operands[1] === operands[2],
    '*': (operands) => operands[0] * operands[1] === operands[2]
  };

  for (let i = startFromZero(operands) ? 0 : 1; i < 10; i++) {

    const numericOperads = getNumericOperands(operands, i);

    if(solver[operationType](numericOperads) && validSolution(exp, i)) return i;
  }

  return -1;
}

function getPossibleSolutions(operands, exp) {

  let possibleSolutions = Array.from(Array(10).keys());

  function isZeroAllowed(operands) {
    return !operands.some(operand => operand.startsWith('-?') || (operand[0] === '?' && operand.length > 1));
  }
  if (!isZeroAllowed(operands)) possibleSolutions.shift();

  possibleSolutions = possibleSolutions.filter(solution => !exp.includes(solution.toString()));

  return possibleSolutions;
}

function startFromZero(operands) {

  return !operands.some(operand => operand.startsWith('-?') || (operand[0] === '?' && operand.length > 1));
}

function validSolution(exp, solution) {

  if (exp.includes('??') && !solution) return false;
  if (exp.includes(solution.toString())) return false;

  return true;
}

function getOperationType(operation) {

  const operators = ['+', '*', '-'];

  for (let i = 0; i < operators.length; i++) {

    if (operation.includes(operators[i])) return operators[i];
  }
}

function getOperands(operation, operator) {

  let operationArr = operation.split(operator);
  if (operator === '-') {
    let negativesArr = [];
    
    for (let i = 0; i < operationArr.length; i++) {

      let helper = '';
      if (!operationArr[i]) continue;
      if (operationArr[i - 1] === '') helper = '-'

      negativesArr.push(helper + operationArr[i]);
    }
    return negativesArr;
  }

  return operationArr;
}

function negativesAllowed(operands) {
  let flag = true;
  for (let i = 0; i < operands.length; i++) {
    if(operands[i] === '?') flag = false;
    if (operands[i].includes('?') && operands[i][0] !== '?') flag = false;
  }
  return flag;
}

function getNumericOperands(operands, i) {

  const operandsNumbers = []

  for (let j = 0; j < operands.length; j++) {

    operandsNumbers.push(Number(operands[j].replaceAll('?', i)))
  }

  return operandsNumbers;
}

module.exports = {
  solveExpression
}