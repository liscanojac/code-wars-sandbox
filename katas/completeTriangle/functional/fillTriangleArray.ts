import { vertixHelper } from "./vertixHelper";

export function fillTriangleArray(triangle: Array<Array<number>>, m: number) {
  
  function downwardHelper() {
    for (let i = 0; i < triangle.length; i++) {
      if (triangle[i].length - 1 - vertixHelper.tier < 0 || triangle[i][triangle[i].length - 1 - vertixHelper.tier] > 0) continue;
      triangle[i][triangle[i].length - 1 - vertixHelper.tier] = m;
    }
  }
  function baseHelper() {
    for (let i = triangle[triangle.length - 1 - vertixHelper.tier].length - 1; i >= 0; i--) {

      if (!triangle[triangle.length - 1 - vertixHelper.tier][i]) {
        triangle[triangle.length - 1 - vertixHelper.tier][i] = m;
      }
    }
  }
  function upwardHelper() {
    for (let i = triangle.length - 1; i >= 0; i--) {
      if (!triangle[i][vertixHelper.tier] && vertixHelper.tier < triangle[i].length) {
        triangle[i][vertixHelper.tier] = m;
      }
    }
  }
  const vertixFunctions = [downwardHelper, baseHelper, upwardHelper];
  
  vertixFunctions[vertixHelper.functionIndex]();
  vertixHelper.functionIndexCounter();
}
