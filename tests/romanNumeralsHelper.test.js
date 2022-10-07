const { RomanNumerals } = require('../romanNumeralsHelper');

xdescribe('testing from 1 to 10', () => {

  test('1', () => {

    expect(RomanNumerals.toRoman(1)).toBe('I')
  })
  test('2', () => {

    expect(RomanNumerals.toRoman(2)).toBe('II')
  })
  test('3', () => {

    expect(RomanNumerals.toRoman(3)).toBe('III')
  })
  test('4', () => {

    expect(RomanNumerals.toRoman(4)).toBe('IV')
  })
  test('5', () => {

    expect(RomanNumerals.toRoman(5)).toBe('V')
  })
  test('6', () => {

    expect(RomanNumerals.toRoman(6)).toBe('VI')
  })
  test('7', () => {

    expect(RomanNumerals.toRoman(7)).toBe('VII')
  })
  test('8', () => {

    expect(RomanNumerals.toRoman(8)).toBe('VIII')
  })
  test('9', () => {

    expect(RomanNumerals.toRoman(9)).toBe('IX')
  })
  test('10', () => {

    expect(RomanNumerals.toRoman(10)).toBe('X')
  })
});

xdescribe('testing from 10 to 20', () => {

  test('11', () => {

    expect(RomanNumerals.toRoman(11)).toBe('XI')
  })
  test('14', () => {

    expect(RomanNumerals.toRoman(14)).toBe('XIV')
  })
  test('15', () => {

    expect(RomanNumerals.toRoman(15)).toBe('XV')
  })
  test('17', () => {

    expect(RomanNumerals.toRoman(17)).toBe('XVII')
  })
  test('19', () => {

    expect(RomanNumerals.toRoman(19)).toBe('XIX')
  })
  test('20', () => {

    expect(RomanNumerals.toRoman(20)).toBe('XX')
  })
})

xdescribe('testing from 20 to 30', () => {

  test('23', () => {

    expect(RomanNumerals.toRoman(23)).toBe('XXIII')
  })
  test('24', () => {

    expect(RomanNumerals.toRoman(24)).toBe('XXIV')
  })
  test('25', () => {

    expect(RomanNumerals.toRoman(25)).toBe('XXV')
  })
  test('27', () => {

    expect(RomanNumerals.toRoman(27)).toBe('XXVII')
  })
  test('29', () => {

    expect(RomanNumerals.toRoman(29)).toBe('XXIX')
  })
  test('30', () => {

    expect(RomanNumerals.toRoman(30)).toBe('XXX')
  })
})

xdescribe('testing from 40 to 50', () => {

  test('40', () => {

    expect(RomanNumerals.toRoman(40)).toBe('XL')
  })
  test('41', () => {

    expect(RomanNumerals.toRoman(41)).toBe('XLI')
  })
  test('44', () => {

    expect(RomanNumerals.toRoman(44)).toBe('XLIV')
  })
  test('45', () => {

    expect(RomanNumerals.toRoman(45)).toBe('XLV')
  })
  test('46', () => {

    expect(RomanNumerals.toRoman(46)).toBe('XLVI')
  })
  test('49', () => {

    expect(RomanNumerals.toRoman(49)).toBe('XLIX')
  })
  test('50', () => {

    expect(RomanNumerals.toRoman(50)).toBe('L')
  })
})

xdescribe('testing from 51 to 60', () => {

  test('51', () => {

    expect(RomanNumerals.toRoman(51)).toBe('LI')
  })
  test('54', () => {

    expect(RomanNumerals.toRoman(54)).toBe('LIV')
  })
  test('55', () => {

    expect(RomanNumerals.toRoman(55)).toBe('LV')
  })
  test('56', () => {

    expect(RomanNumerals.toRoman(56)).toBe('LVI')
  })
  test('59', () => {

    expect(RomanNumerals.toRoman(59)).toBe('LIX')
  })
  test('60', () => {

    expect(RomanNumerals.toRoman(60)).toBe('LX')
  })
})

xdescribe('testing from 80 to 100', () => {

  test('80', () => {

    expect(RomanNumerals.toRoman(80)).toBe('LXXX')
  })
  test('89', () => {

    expect(RomanNumerals.toRoman(89)).toBe('LXXXIX')
  })
  test('90', () => {

    expect(RomanNumerals.toRoman(90)).toBe('XC')
  })
  test('94', () => {

    expect(RomanNumerals.toRoman(94)).toBe('XCIV')
  })
  test('99', () => {

    expect(RomanNumerals.toRoman(99)).toBe('XCIX')
  })
  test('100', () => {

    expect(RomanNumerals.toRoman(100)).toBe('C')
  })
})

xdescribe('testing from 101 to 200', () => {

  test('101', () => {

    expect(RomanNumerals.toRoman(101)).toBe('CI')
  })
  test('149', () => {

    expect(RomanNumerals.toRoman(149)).toBe('CXLIX')
  })
  test('150', () => {

    expect(RomanNumerals.toRoman(150)).toBe('CL')
  })
  test('194', () => {

    expect(RomanNumerals.toRoman(194)).toBe('CXCIV')
  })
  test('199', () => {

    expect(RomanNumerals.toRoman(199)).toBe('CXCIX')
  })
  test('200', () => {

    expect(RomanNumerals.toRoman(200)).toBe('CC')
  })
})

xdescribe('testing from 400 to 600', () => {

  test('400', () => {

    expect(RomanNumerals.toRoman(400)).toBe('CD')
  })
  test('449', () => {

    expect(RomanNumerals.toRoman(449)).toBe('CDXLIX')
  })
  test('450', () => {

    expect(RomanNumerals.toRoman(450)).toBe('CDL')
  })
  test('494', () => {

    expect(RomanNumerals.toRoman(494)).toBe('CDXCIV')
  })
  test('499', () => {

    expect(RomanNumerals.toRoman(499)).toBe('CDXCIX')
  })
  test('500', () => {

    expect(RomanNumerals.toRoman(500)).toBe('D')
  })
  test('501', () => {

    expect(RomanNumerals.toRoman(501)).toBe('DI')
  })
  test('555', () => {

    expect(RomanNumerals.toRoman(555)).toBe('DLV')
  })

  test('600', () => {

    expect(RomanNumerals.toRoman(600)).toBe('DC')
  })
})

xdescribe('testing from 900 to 1999', () => {

  test('900', () => {

    expect(RomanNumerals.toRoman(900)).toBe('CM')
  })
  test('999', () => {

    expect(RomanNumerals.toRoman(999)).toBe('CMXCIX')
  })
  test('1000', () => {

    expect(RomanNumerals.toRoman(1000)).toBe('M')
  })
  test('1001', () => {

    expect(RomanNumerals.toRoman(1001)).toBe('MI')
  })
  test('1253', () => {

    expect(RomanNumerals.toRoman(1253)).toBe('MCCLIII')
  })
  test('1555', () => {

    expect(RomanNumerals.toRoman(1555)).toBe('MDLV')
  })
  test('1754', () => {

    expect(RomanNumerals.toRoman(1754)).toBe('MDCCLIV')
  })
  test('1999', () => {

    expect(RomanNumerals.toRoman(1999)).toBe('MCMXCIX')
  })
})

xdescribe('testing from 2000 to 3999', () => {

  test('2002', () => {

    expect(RomanNumerals.toRoman(2002)).toBe('MMII')
  })
  test('2222', () => {

    expect(RomanNumerals.toRoman(2222)).toBe('MMCCXXII')
  })
  test('3000', () => {

    expect(RomanNumerals.toRoman(3000)).toBe('MMM')
  })
  test('3333', () => {

    expect(RomanNumerals.toRoman(3333)).toBe('MMMCCCXXXIII')
  })
  test('3999', () => {

    expect(RomanNumerals.toRoman(3999)).toBe('MMMCMXCIX')
  })
})
xdescribe('testing from 4000 on', () => {

  test('4000', () => {

    expect(RomanNumerals.toRoman(4000)).toBe('IV')
  })
  test('4123', () => {

    expect(RomanNumerals.toRoman(4123)).toBe('IVCXXIII')
  })
  test('4321', () => {

    expect(RomanNumerals.toRoman(4321)).toBe('IVCCCXXI')
  })
  test('5555', () => {

    expect(RomanNumerals.toRoman(5555)).toBe('VDLV')
  })
  test('9999', () => {

    expect(RomanNumerals.toRoman(9999)).toBe('IXCMXCIX')
  })
})

// fromRoman
describe('testing fromRoman I to X', () => {

  test('I', () => {

    expect(RomanNumerals.fromRoman('I')).toBe(1)
  })

  test('II', () => {

    expect(RomanNumerals.fromRoman('II')).toBe(2)
  })

  test('III', () => {

    expect(RomanNumerals.fromRoman('III')).toBe(3)
  })

  test('IV', () => {

    expect(RomanNumerals.fromRoman('IV')).toBe(4)
  })

  test('V', () => {

    expect(RomanNumerals.fromRoman('V')).toBe(5)
  })

  test('VI', () => {

    expect(RomanNumerals.fromRoman('VI')).toBe(6)
  })

  test('VII', () => {

    expect(RomanNumerals.fromRoman('VII')).toBe(7)
  })

  test('VIII', () => {

    expect(RomanNumerals.fromRoman('VIII')).toBe(8)
  })

  test('IX', () => {

    expect(RomanNumerals.fromRoman('IX')).toBe(9)
  })

  test('X', () => {

    expect(RomanNumerals.fromRoman('X')).toBe(10)
  })
})

describe('testing fromRoman XI to L', () => {

  test('XXIV(24)', () => {

    expect(RomanNumerals.fromRoman('XXIV')).toBe(24)
  })

  test('XXXIII(33)', () => {

    expect(RomanNumerals.fromRoman('XXXIII')).toBe(33)
  })

  test('III', () => {

    expect(RomanNumerals.fromRoman('III')).toBe(3)
  })

  test('IV', () => {

    expect(RomanNumerals.fromRoman('IV')).toBe(4)
  })

  test('V', () => {

    expect(RomanNumerals.fromRoman('V')).toBe(5)
  })

  test('VI', () => {

    expect(RomanNumerals.fromRoman('VI')).toBe(6)
  })

  test('VII', () => {

    expect(RomanNumerals.fromRoman('VII')).toBe(7)
  })

  test('VIII', () => {

    expect(RomanNumerals.fromRoman('VIII')).toBe(8)
  })

  test('IX', () => {

    expect(RomanNumerals.fromRoman('IX')).toBe(9)
  })

  test('X', () => {

    expect(RomanNumerals.fromRoman('X')).toBe(10)
  })
})

describe('testing fromRoman from 10 to 20', () => {

  test('XI(11)', () => {

    expect(RomanNumerals.fromRoman('XI')).toBe(11)
  })
  test('XIV(14)', () => {

    expect(RomanNumerals.fromRoman('XIV')).toBe(14)
  })
  test('XV(15)', () => {

    expect(RomanNumerals.fromRoman('XV')).toBe(15)
  })
  test('XVII(17)', () => {

    expect(RomanNumerals.fromRoman('XVII')).toBe(17)
  })
  test('XIX(19)', () => {

    expect(RomanNumerals.fromRoman('XIX')).toBe(19)
  })
  test('XX(20)', () => {

    expect(RomanNumerals.fromRoman('XX')).toBe(20)
  })
})

describe('testing fromRoman from 101 to 200', () => {

  test('CI(101)', () => {

    expect(RomanNumerals.fromRoman('CI')).toBe(101)
  })
  test('CXLIX(149)', () => {

    expect(RomanNumerals.fromRoman('CXLIX')).toBe(149)
  })
  test('CL(150)', () => {

    expect(RomanNumerals.fromRoman('CL')).toBe(150)
  })
  test('CXCIV(194)', () => {

    expect(RomanNumerals.fromRoman('CXCIV')).toBe(194)
  })
  test('CXCIX(199)', () => {

    expect(RomanNumerals.fromRoman('CXCIX')).toBe(199)
  })
  test('CC(200)', () => {

    expect(RomanNumerals.fromRoman('CC')).toBe(200)
  })
})