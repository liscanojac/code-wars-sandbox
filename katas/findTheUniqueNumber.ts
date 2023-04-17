// https://twitter.com/0xDesigner/status/1642554817590566915?s=20

export function findUnique(numArray: Array<number>): number {

  const uniqueSet = new Set(numArray);

  const uniqueValues = {};

  for (let i = 0; i < numArray.length; i++) {

    if (uniqueValues[numArray[i]]) {
      uniqueValues[numArray[i]]++;

      if (uniqueValues[numArray[i]] > 1) {

        uniqueSet.delete(numArray[i]);
        break;
      }
    } else {
      uniqueValues[numArray[i]] = 1;
    }
  }
  return [...uniqueSet][0];
}