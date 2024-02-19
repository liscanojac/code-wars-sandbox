// https://www.codewars.com/kata/5e8dd197c122f6001a8637ca

interface DuplicateObj {
  [i: number]: Array<string>;
};
interface Helper {
  [i: string]: number
}

export function duplicatesEverywhere(obj: DuplicateObj): DuplicateObj {

  const numericKeys = Object.keys(obj).map(k => Number(k)).sort((a, b) => b - a);

  const duplicateHelper: Helper = {};

  function iterateArray(arr: Array<string>, key: number): Array<string> {

    const resultArr: Array<string> = [];

    for (let i = 0; i < arr.length; i++) {

      if (duplicateHelper[arr[i]] !== undefined) {
        continue;
      }
      duplicateHelper[arr[i]] = key;
      resultArr.push(arr[i]);
    }
    return resultArr;
  }

  for (let i = 0; i < numericKeys.length; i++) {

    if (!i) {
      obj[numericKeys[i]] = [...new Set(obj[numericKeys[i]])]
    }
    obj[numericKeys[i]] = iterateArray(obj[numericKeys[i]], numericKeys[i]);
  }
  return obj;
}