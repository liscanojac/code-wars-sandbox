
export function getTriangleStr(triangle: Array<Array<number>>): string {

  let triangleStr = '';
  for (let i = 0; i < triangle.length; i++) {
    const triangleLevel = `${'&nbsp'.repeat(triangle.length - i)}${triangle[i].join(' ')}`;
    triangleStr += i ? `\n${triangleLevel}` : triangleLevel;
  }
  return triangleStr;
}