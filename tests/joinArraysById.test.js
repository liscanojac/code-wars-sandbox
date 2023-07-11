import { joinArraysById } from "../katas/joinArraysById";

describe('testing joinArraysById kata', () => {

  test('first test', () => {

    const arr1 = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ]
    const arr2 = [{ id: 3, x: 5 }]

    const solution =  [
      { "id": 1, "x": 1 },
      { "id": 2, "x": 9 },
      { "id": 3, "x": 5 }
    ]

    expect(joinArraysById(arr1, arr2)).toEqual(solution);
  });

  test('second test', () => {

    const arr1 = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ]
    const arr2 = [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]

    const solution = [
      { "id": 1, "x": 2, "y": 3 },
      { "id": 2, "x": 10, "y": 20 },
      { "id": 3, "x": 0, "y": 0 }
    ]

    expect(joinArraysById(arr1, arr2)).toEqual(solution);
  });

  test('third test', () => {

    const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
    const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]

    const solution = [
      { "id": 1, "b": { "c": 84 }, "v": [1, 3], "y": 48 }
    ]

    expect(joinArraysById(arr1, arr2)).toEqual(solution);
  });
})