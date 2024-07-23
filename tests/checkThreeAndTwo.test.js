import { checkThreeAndTwo } from "../katas/checkThreeAndTwo";

describe('Check three and two kata', () => {

  test('["a", "a", "a", "b", "b"]', () => {

    expect(checkThreeAndTwo(["a", "a", "a", "b", "b"])).toBeTruthy();
  });

  test('["a", "b", "c", "b", "c"]', () => {

    expect(checkThreeAndTwo(["a", "b", "c", "b", "c"])).toBeFalsy();
  });

  test('["a", "a", "a", "a", "a"]', () => {

    expect(checkThreeAndTwo(["a", "a", "a", "a", "a"])).toBeFalsy();
  });

})