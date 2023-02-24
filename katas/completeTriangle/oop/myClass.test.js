import MyClass from "./test";
import './test2';
// import { MyClass } from "./test";

describe('test', () => {

  const testName = 'testName';
  test('is this working?', () => {

    const testUser = new MyClass(testName);

    expect(testUser.sayGoodbye()).toBe(testName);
  })
})
