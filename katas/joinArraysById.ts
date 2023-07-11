// https://www.codewars.com/kata/6481c68ffdf80b6147d85248

interface ElementWithId {
  id: number
  [key: string]: unknown;
}

interface MapElement {
  [key: number]: ElementWithId
}


export function joinArraysById(arr1: Array<ElementWithId>, arr2: Array<ElementWithId>): Array<ElementWithId> {

  const joinedArr = arr1.concat(arr2);
  const joinedObj: MapElement = {};

  for (let i = 0; i < joinedArr.length; i++) {

    if (joinedObj[joinedArr[i].id]) {

      joinedObj[joinedArr[i].id] = {
        ...joinedObj[joinedArr[i].id],
        ...joinedArr[i]
      };

      continue;
    }
    joinedObj[joinedArr[i].id] = joinedArr[i];
  }
  return Object.values(joinedObj);
}