const { whoIsWinner } = require('../connectFour')

describe('Connect Four kata', () => {

  test('Red winner', () => {

    expect(whoIsWinner(["A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "G_Red",
    "B_Yellow"])).toBe("Red")
  })
})