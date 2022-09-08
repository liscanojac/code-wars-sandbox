// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {

  if (n < 10) {
    return n
  }
  const nArr = n.toString().split('');

  let result = 0;

  for (let i = 0; i < nArr.length; i++) {

    result += Number(nArr[i])
  }

  return digitalRoot(result);
}

function digitalRootArray(n) {

  const nArr = n.toString().split('');

  const sumArr = nArr.reduce((prev, curr) => Number(prev) + Number(curr))
  
  if (sumArr < 10) {
    return nArr
  }
  
  return nArr.concat(digitalRootArray(sumArr))
}
console.log(digitalRootArray(942))
