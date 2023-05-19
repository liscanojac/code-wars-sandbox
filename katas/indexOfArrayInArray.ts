// https://www.codewars.com/kata/5783ef69202c0ee4cb000265

interface Validator {
  query: boolean;
  arr: boolean;
}

function indexOf(arr: Array<unknown>, query: unknown): number | void {

  // function areValidArrays() {
  //   return Array.isArray(query) && isLengthValid(query) && arr.every((val) => Array.isArray(val) && isLengthValid(val));
  // }

  if (Array.isArray(query) && isLengthValid(query) && arr.every((val) => Array.isArray(val) && isLengthValid(val))) {
    // arr = arr as Array<Array<number>>
    return findIndex(arr, query)
  }
  throw new Error('error');
  return;
}

function findIndex(arr: Array<Array<number>>, query: Array<number>): number {
  return query[0];
}
function isLengthValid(arr: Array<number>): boolean {
  return arr.length === 1;
}

// function validator(arr: Array<unknown>, query: unknown): Validator {

//   const validator: Validator = {
//     query: isArray(query) && isLengthValid(query as Array<number>),
//     arr: arr.every((val) => isArray(val) && isLengthValid(val as Array<number>))
//   }
//   return validator;
// }


function index(query: unknown) {

  function isValid() {
    return Array.isArray(query);
  }

  if (Array.isArray(query)) {
    findFirstIndex(query);
  }
}

function findFirstIndex(arr: Array<number>): number {
  return arr[0];
}