import { MyJSClass } from "./test3";
import './test4';

describe('test', () => {

  const testName = 'testName';
  test('is this working?', () => {

    const testUser = new MyJSClass(testName);

    expect(testUser.sayGoodbye()).toBe(testName);
  })
})