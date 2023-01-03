const { rotate } = require('../rotateAnArrayMatrix')
const directions = {
  clockwise: 'clockwise',
  'counter-clockwise': 'counter-clockwise'
};

describe('Rotate and array matrix codewars kata testing a 3x3 matrix', () => {

  let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];

  test('testing clockwise', () => {

    expect(rotate(matrix, 'clockwise')).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
  }
  )
  test('testing counter-clockwise', () => {

    expect(rotate(matrix, 'counter-clockwise')).toEqual([[3,6,9],[2,5,8],[1,4,7]]);
  })
})

describe('Rotate and array matrix codewars kata testing a 3x4 matrix', () => {

  let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
  ];

  test('testing clockwise', () => {

    expect(rotate(matrix, 'clockwise')).toEqual([[10,7,4,1],[11,8,5,2],[12,9,6,3]]);
  }
  )
  test('testing counter-clockwise', () => {

    expect(rotate(matrix, 'counter-clockwise')).toEqual([[3,6,9,12],[2,5,8,11],[1,4,7,10]]);
  })

  test('testing clockwise twice', () => {

    expect(rotate(rotate(matrix, "clockwise"), "clockwise")).toEqual([
      [ 12, 11, 10 ],
      [ 9, 8, 7 ],
      [ 6, 5, 4 ],
      [ 3, 2, 1 ]
    ])
  })
  test('testing counter-clockwise twice', () => {

    expect(rotate(rotate(matrix, 'counter-clockwise'), 'counter-clockwise')).toEqual([
      [ 12, 11, 10 ],
      [ 9, 8, 7 ],
      [ 6, 5, 4 ],
      [ 3, 2, 1 ]
    ])
  })

  test('testing going back and forth', () => {

    expect(rotate(rotate(matrix, 'clockwise'), 'counter-clockwise')).toEqual(matrix)
  })

  test('testing going back and forth', () => {

    expect(rotate(rotate(matrix, 'counter-clockwise'), 'clockwise')).toEqual(matrix)
  })
})

describe('testing a matrix of one row', () => {

  let matrix = [
    [1,2,3]
  ];

  test('testing clockwise', () => {

    expect(rotate(matrix, directions.clockwise)).toEqual([[1],[2],[3]])
  })

  test('testing counter-clockwise', () => {

    expect(rotate(matrix, directions['counter-clockwise'])).toEqual([[3],[2],[1]])
  })
})

describe('testing a single-cell matrix', () => {

  let matrix = [
    [1]
  ];

  test('testing clockwise', () => {

    expect(rotate(matrix, directions.clockwise)).toEqual(matrix)
  })

  test('testing counter-clockwise', () => {

    expect(rotate(matrix, directions['counter-clockwise'])).toEqual(matrix)
  })
})