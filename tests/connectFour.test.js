const { whoIsWinner } = require('../connectFour')

describe('Connect Four kata', () => {

  test('Yellow winner', () => {

    expect(whoIsWinner(["A_Red",
      "B_Yellow",
      "A_Red",
      "B_Yellow",
      "A_Red",
      "B_Yellow",
      "G_Red",
      "B_Yellow"])).toBe("Yellow")
  })

  test('Yellow winner', () => {

    expect(whoIsWinner(["C_Yellow",
      "E_Red",
      "G_Yellow",
      "B_Red",
      "D_Yellow",
      "B_Red",
      "B_Yellow",
      "G_Red",
      "C_Yellow",
      "C_Red",
      "D_Yellow",
      "F_Red",
      "E_Yellow",
      "A_Red",
      "A_Yellow",
      "G_Red",
      "A_Yellow",
      "F_Red",
      "F_Yellow",
      "D_Red",
      "B_Yellow",
      "E_Red",
      "D_Yellow",
      "A_Red",
      "G_Yellow",
      "D_Red",
      "D_Yellow",
      "C_Red"])).toBe("Yellow")
  })

  test('Red winner', () => {

    expect(whoIsWinner(["A_Yellow",
      "B_Red",
      "B_Yellow",
      "C_Red",
      "G_Yellow",
      "C_Red",
      "C_Yellow",
      "D_Red",
      "G_Yellow",
      "D_Red",
      "G_Yellow",
      "D_Red",
      "F_Yellow",
      "E_Red",
      "D_Yellow"])).toBe("Red")
  })

  test('Draw', () => {

    expect(whoIsWinner([ "A_Red",
      "B_Yellow",
      "A_Red",
      "E_Yellow",
      "F_Red",
      "G_Yellow"])).toBe("Draw")
  })

  test('Yellow is winner', () => {

    expect(whoIsWinner([ 'F_Red',
  'G_Yellow',
  'G_Red',
  'F_Yellow',
  'C_Red',
  'C_Yellow',
  'D_Red',
  'E_Yellow',
  'E_Red',
  'A_Yellow',
  'B_Red',
  'B_Yellow',
  'E_Red',
  'C_Yellow',
  'G_Red',
  'D_Yellow',
  'G_Red',
  'A_Yellow',
  'F_Red',
  'F_Yellow',
  'E_Red',
  'B_Yellow',
  'G_Red',
  'F_Yellow',
  'C_Red',
  'D_Yellow',
  'A_Red',
  'F_Yellow' ])).toBe("Yellow")
  })
})