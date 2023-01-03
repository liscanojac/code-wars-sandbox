const { multiply } = require('../multiplyingNumbersAsStrings');

describe('Multiplying numbers as string codewars kata - simple operations', () => {

  test('it should return 6', () => {

    expect(multiply("2", "3")).toBe("6")
  })
  test('it should return 2070', () => {

    expect(multiply("30", "69")).toBe("2070")
  })
  test('it should return 935', () => {

    expect(multiply("11", "85")).toBe("935")
  })
  test('it  should return 39156', () => {

    expect(multiply("3263", "12")).toBe("39156");
  })
})

describe('Multiplying numbers as string codewars kata - edge cases', () => {

  test('it should return 0', () => {

    expect(multiply("2", "0")).toBe("0")
  })
  test('it should return 0', () => {

    expect(multiply("0", "30")).toBe("0")
  })
  test('it should return 3', () => {

    expect(multiply("0000000001", "3")).toBe("3")
  })
  test('it  should return 3027', () => {

    expect(multiply("1009", "03")).toBe("3027");
  })
})

describe('Multiplying numbers as string codewars kata - some big operations', () => {

  test('it should return 5619135910', () => {

    expect(multiply("98765", "56894")).toBe("5619135910")
  })
  test('it should return 2830869077153280552556547081187254342445169156730', () => {

    expect(multiply("1020303004875647366210", "2774537626200857473632627613")).toBe("2830869077153280552556547081187254342445169156730")
  })
  test('it  should return "444625839871840560024489175424316205566214109298"', () => {
    
    expect(multiply("58608473622772837728372827", "7586374672263726736374")).toBe("444625839871840560024489175424316205566214109298");
  })
  test('it should return 81129638414606663681390495662081', () => {

    expect(multiply("9007199254740991", "9007199254740991")).toBe("81129638414606663681390495662081")
  })
})