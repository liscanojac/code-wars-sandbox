// https://www.codewars.com/kata/525a566985a9a47bc8000670/train/javascript

function rotate(matrix, direction) {

  const rotatedMatrix = createArr(matrix[0].length);

  const directionHandler = {
    clockwise: () => {
      
      for (let i = 0; i < matrix[0].length; i++) {
        
        for (let j = matrix.length - 1; j >= 0; j--) {
          rotatedMatrix[i].push(matrix[j][i])
        }
      }
      return rotatedMatrix;
    },
    'counter-clockwise': () => {

      for (let i = matrix[0].length - 1; i >= 0; i--) {
        let k = matrix[0].length - 1 - i;
        for (let j = 0; j < matrix.length; j++) {

          rotatedMatrix[k].push(matrix[j][i]);
        }
        k++;
      }
      return rotatedMatrix;
    }
  }

  return directionHandler[direction]();
}

function createArr(size) {

  let resultArr = [];

  for (let i = 0; i < size; i++) {
    resultArr.push([]);
  }

  return resultArr;
}

module.exports = {
  rotate
}