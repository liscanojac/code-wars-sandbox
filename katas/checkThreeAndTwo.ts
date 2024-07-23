// https://www.codewars.com/kata/5a9e86705ee396d6be000091

export function checkThreeAndTwo(arr: Array<string>): boolean {

  const countHelper = {};

  for (let i = 0; i < arr.length; i++) {

    if (countHelper.hasOwnProperty(arr[i])) {
      if (countHelper[arr[i]] === 3) return false;
      countHelper[arr[i]]++;
      continue;
    }
    if (Object.keys(countHelper).length < 2) {
      countHelper[arr[i]] = 1;
      continue;
    }
    return false
  }
  return true;
}
