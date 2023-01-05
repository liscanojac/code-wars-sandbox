// https://www.codewars.com/kata/546d15cebed2e10334000ed9

function solveExpression(exp) {

  const expArray = exp.split('=');
  
  const operation = expArray[0];

  const operationType = getOperationType(operation);
  const operands = getOperands(operation, operationType);
  operands.push(expArray[1]);
  const possibleSolutions = getPossibleSolutions(operands, exp);

  const solutionValidator = {
    '+': (operands) => operands[0] + operands[1] === operands[2],
    '-': (operands) => operands[0] - operands[1] === operands[2],
    '*': (operands) => operands[0] * operands[1] === operands[2]
  };

  for (let i = 0; i < possibleSolutions.length; i++) {

    const numericOperads = getNumericOperands(operands, possibleSolutions[i]);

    if (solutionValidator[operationType](numericOperads)) return possibleSolutions[i];
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

function getNumericOperands(operands, possibleSolution) {

  const operandsNumbers = []

  for (let i = 0; i < operands.length; i++) {

    operandsNumbers.push(Number(operands[i].replaceAll('?', possibleSolution)))
  }

  return operandsNumbers;
}

module.exports = {
  solveExpression
}