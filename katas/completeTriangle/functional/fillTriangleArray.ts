import { formatNumber } from "./formatNumber";
import { vertixHelper } from "./vertixHelper";

export function fillTriangleArray(triangle: Array<Array<number>>, m: number): number {
  
  function downwardHelper() {
    for (let i = 0; i < triangle.length; i++) {
      if (triangle[i].length - 1 - vertixHelper.tier < 0 || triangle[i][triangle[i].length - 1 - vertixHelper.tier] >= 0) continue;
      triangle[i][triangle[i].length - 1 - vertixHelper.tier] = formatNumber(m);
      m++;
    }
  }
  function baseHelper() {
    for (let i = triangle[triangle.length - 1 - vertixHelper.tier].length - 1; i >= 0; i--) {

      if (triangle[triangle.length - 1 - vertixHelper.tier][i] >= 0) continue;
      triangle[triangle.length - 1 - vertixHelper.tier][i] = formatNumber(m);
      m++;
    }
  }
  function upwardHelper() {
    for (let i = triangle.length - 1; i >= 0; i--) {
      if (triangle[i][vertixHelper.tier] >= 0 || vertixHelper.tier >= triangle[i].length) continue;
      triangle[i][vertixHelper.tier] = formatNumber(m);
      m++;
    }
  }
  const vertixFunctions = [downwardHelper, baseHelper, upwardHelper];
  
  vertixFunctions[vertixHelper.functionIndex]();
  vertixHelper.functionIndexCounter();
  return m;
}
