import { fillTriangleArray } from "./fillTriangleArray";
import { getTriangleArray } from "./getTriangleArray";
import { getTriangleStr } from "./getTriangleStr";
import { triangleSizeValidator } from "./triangleSizeValidator";

function makeTriangleFunctional(m: number, n: number): string {

  const triangleSize = triangleSizeValidator(m, n);
  if (!triangleSize.valid) return "";

  const triangleArr = getTriangleArray(triangleSize.length);

  while (m <= n) {
    m = fillTriangleArray(triangleArr, m);
  }
  return getTriangleStr(triangleArr);
}