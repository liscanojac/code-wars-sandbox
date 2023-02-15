// https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8

export function arrayDiffVeryFast(a: Array<number>, b: Array<number>): Array<number> {

  const b_unique_values = new Set(b);

  return a.filter(x => !b_unique_values.has(x));
}