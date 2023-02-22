// https://www.codewars.com/kata/58281843cea5349c9f000110
type Triangle = {
  valid: boolean;
  length: number;
};

type VertixHelper = {
  start: number;
  end: number;
  base: number;
  functionIndex: number;
  functionIndexCounter: () => void
};

function makeTriangle(m: number, n: number): string {

  const triangle = validTriangle(n - (m - 1));
  if (!triangle.valid) return "";
  const vertixHelper: VertixHelper = {
    start: 1,
    end: 0,
    base: 0,
    functionIndex: 0,
    functionIndexCounter: () => {
      if (vertixHelper.functionIndex === 2) {
        vertixHelper.functionIndex = 0;
      } else {
        vertixHelper.functionIndex++;
      }
    },
  };
  const triangleArr: Array<Array<number>> = [];
  for (let i = 1; i <= triangle.length; i++) {
    const triangleLevel: Array<number> = new Array(i);
    triangleArr.push(triangleLevel);
  }
  function startHelper() {
    triangleArr[0][0] = m;
    m++;
  }
  function downwardHelper() {

    for (let i = vertixHelper.start; i < triangleArr.length - vertixHelper.end; i++) {

      triangleArr[i][triangleArr[i].length - vertixHelper.start] = m;
      m++;
    }
    vertixHelper.end++;
  }
  function baseHelper() {

    for (let i = triangleArr[triangleArr.length - 1 - vertixHelper.base].length - 2; i >= 0; i--) {

      triangleArr[triangleArr.length - 1 - vertixHelper.base][i] = m;
      m++;
    }
    vertixHelper.base++;
  }
  function upwardHelper() {

    for (let i = triangleArr.length - 1 - vertixHelper.end; i >= vertixHelper.start; i--) {

      triangleArr[i][0] = m;
      m++;
    }
    vertixHelper.start++;
  }
  const vertixFunctions = [downwardHelper, baseHelper, upwardHelper];
  startHelper();
  while(m <= n) {

    vertixFunctions[vertixHelper.functionIndex]();
    vertixHelper.functionIndexCounter();
  }
  console.log(triangleArr);
}

function validTriangle(n: number): Triangle {

  let i = 1;
  let accumulator = i;

  while (accumulator < n) {
    i++;
    accumulator += i;
  }

  return {
    valid: accumulator === n,
    length: i
  };
}

makeTriangle(1, 10)