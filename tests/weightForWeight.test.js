const { orderWeight } = require('../weightForWeight')

describe('Weight For weight kata', () => {

  test('basic test 1', () => {

    expect(orderWeight("103 123 4444 99 2000")).toBe("2000 103 123 4444 99")
  })

  test('basic test 2', () => {

    expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toBe("11 11 2000 10003 22 123 1234000 44444444 9999")
  })
})