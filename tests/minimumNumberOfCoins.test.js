const { minCoins, amountChecker } = require('../minimumNumberOfCoins');
const invalidInput = "Invalid input - enter a positive amount of money";


describe('testing the string formatter', () => {


  test('It should return the same amount when its an integer', () => {

    expect(amountChecker(123).formattedAmount).toBe(123)
  })

  test('It should return the same amount when its an integer', () => {

    expect(amountChecker(0.83).formattedAmount).toBe(0.83)
  })

  test('It should return false with a boolean', () => {

    expect(amountChecker(false).valid).toBe(false)
  })

  test('It should return false with a boolean', () => {

    expect(amountChecker(true).valid).toBe(false)
  })

  test('It should return false with null', () => {

    expect(amountChecker(null).valid).toBe(false)
  })

  test('It should return false with undefined', () => {

    expect(amountChecker(undefined).valid).toBe(false)
  })

  test('It should return false with NaN', () => {

    expect(amountChecker(NaN).valid).toBe(false)
  })

  test('It should return false', () => {

    expect(amountChecker(0).valid).toBe(false);
  })

  test('It should return 184 with a string 1.84', () => {

    expect(amountChecker("1.84").formattedAmount).toBe(184);
  })

  test('It should return 2100 with a string "£21"', () => {

    expect(amountChecker("£21").formattedAmount).toBe(2100);
  })

  test('It should return false with a string "£21£"', () => {

    expect(amountChecker("£21£").valid).toBe(false);
  })

  test('It should return false with a string "£-21"', () => {

    expect(amountChecker("£-21").valid).toBe(false);
  })

  test('It should return false with a string "-£21"', () => {

    expect(amountChecker("-£21").valid).toBe(false);
  })

  test('It should return 126 with a string "1.257422457"', () => {

    expect(amountChecker("1.257422457").formattedAmount).toBe(126);
  })

  test('It should return 4 with a string "4p"', () => {

    expect(amountChecker("4p").formattedAmount).toBe(4);
  })

  test('It should return false with a string "54pp"', () => {

    expect(amountChecker("54pp").valid).toBe(false);
  })

  test('It should return false with a string "L200"', () => {

    expect(amountChecker("L200").valid).toBe(false);
  })

  test('It should return false with a string "4.2."', () => {

    expect(amountChecker("4.2.").valid).toBe(false);
  })

  test('It should return false with a string "Op"', () => {

    expect(amountChecker("0p").valid).toBe(false);
  })

  test('It should return false with a string "£O"', () => {

    expect(amountChecker("£0").valid).toBe(false);
  })

  test('It should return true with a string "£1O"', () => {

    expect(amountChecker("£10").valid).toBe(true);
  })

  test('It should return true with a string "£1.87p"', () => {

    expect(amountChecker("£1.87p").valid).toBe(true);
  })
})



describe('Minimum Number of Coins codewars kata', () => {

  test('It should return invalidInput with a boolean', () => {

    expect(minCoins(false)).toBe(invalidInput)
  })

  test('It should return invalidInput with a boolean', () => {

    expect(minCoins(true)).toBe(invalidInput)
  })

  test('it should return "1 £1 coin, 1 50p coin, 1 20p coin, 1 10p coin, 1 5p coin and 1 2p coin"', () => {

    expect(minCoins("1.87")).toBe("1 £1 coin, 1 50p coin, 1 20p coin, 1 10p coin, 1 5p coin and 1 2p coin");
  })

  test('it should return "1 £1 coin, 1 50p coin, 2 20p coins, 1 5p coin and 1 2p coin"', () => {

    expect(minCoins(197)).toBe("1 £1 coin, 1 50p coin, 2 20p coins, 1 5p coin and 1 2p coin");
  })

  test('it should return InvalidInput', () => {

    expect(minCoins("2£1p")).toBe(invalidInput);
  })
  test('it should return "2 2p coins"', () => {

    expect(minCoins("4")).toBe("2 2p coins");
  })
  test('it should return "1 50p coin, 1 20p coin, 1 10p coin and 1 5p coin"', () => {

    expect(minCoins("85")).toBe('1 50p coin, 1 20p coin, 1 10p coin and 1 5p coin');
  })

  test('it should return "5 £2 coins"', () => {

    expect(minCoins("£10")).toBe('5 £2 coins');
  })

  test('it should return "5 £2 coins"', () => {

    expect(minCoins("001.41p")).toBe('5 £2 coins');
  })
})