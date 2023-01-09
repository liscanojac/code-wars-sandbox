import { toUnderscore } from "../pascalCaseIntoSnakeCase";

describe('Convert PascalCase string into snake_case kata', () => {

  test('Convert TestController', () => {

    expect(toUnderscore('TestController')).toBe('test_controller')
  })

  test('Convert MoviesAndBooks', () => {

    expect(toUnderscore('MoviesAndBooks')).toBe('movies_and_books')
  })
  
  test('Convert App7Test', () => {

    expect(toUnderscore('App7Test')).toBe('app7_test')
  })

  test('Convert 1', () => {

    expect(toUnderscore(1)).toBe('1')
  })
})