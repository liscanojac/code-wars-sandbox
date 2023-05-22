// https://www.codewars.com/kata/5783ef69202c0ee4cb000265

export function indexOf(arr: Array<unknown>, query: unknown): number | void {

  if (arr.every(isValidArray) && isValidArray(query)) {
    return findIndex(arr, query);
  }
  throw new Error('arguments invalid');
}

function findIndex(arr: Array<Array<number>>, query: Array<number>): number {
  
  const strQuery = arrToString(query);

  return arr.findIndex((val) => arrToString(val) === strQuery);
}

function arrToString(arr: Array<number>): string {

  return JSON.stringify(arr);
}
function isLengthValid(arr: Array<number>): boolean {
  return arr.length === 2;
}

function isValidArray(arr: unknown): arr is Array<number> {
  // this is how you can set a validator function in TS to validate the type of a variable, you get an unknown or a set or OR types of arguments and you can assert its type and then return a boolean with this IS keyword
  return Array.isArray(arr) && isLengthValid(arr); 
}