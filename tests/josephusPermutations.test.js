import { josephus } from "../katas/josephus/josephusPermutation";
import { Josephus } from "../katas/josephus/josephusClass";

xdescribe('Josephus Permutations kata', () => {

  test('testing with k 3', () => {

    expect(josephus([1,2,3,4,5,6,7], 3)).toEqual([3,6,2,7,5,1,4]);
  })

  test('testing with k 1', () => {

    expect(josephus([1,2,3,4,5,6,7,8,9,10], 1)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  })

  test('testing with k 2', () => {

    expect(josephus([1,2,3,4,5,6,7,8,9,10], 2)).toEqual([2, 4, 6, 8, 10, 3, 7, 1, 9, 5]);
  })
  test('testing with k 4', () => {

    expect(josephus(["C","o","d","e","W","a","r","s"],4)).toEqual(['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']);
  })
  test('testing with an empty array', () => {

    expect(josephus([],3)).toEqual([]);
  })
})

describe('Josephus Permutations class', () => {

  const josephus = new Josephus();

  test('testing with k 3', () => {

    expect(josephus.soldiersPermutation([1,2,3,4,5,6,7], 3)).toEqual([3,6,2,7,5,1,4]);
  })

  test('testing with k 1', () => {

    expect(josephus.soldiersPermutation([1,2,3,4,5,6,7,8,9,10], 1)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  })

  test('testing with k 2', () => {

    expect(josephus.soldiersPermutation([1,2,3,4,5,6,7,8,9,10], 2)).toEqual([2, 4, 6, 8, 10, 3, 7, 1, 9, 5]);
  })
  test('testing with k 4', () => {

    expect(josephus.soldiersPermutation(["C","o","d","e","W","a","r","s"],4)).toEqual(['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']);
  })
  test('testing with an empty array', () => {

    expect(josephus.soldiersPermutation([],3)).toEqual([]);
  })
})