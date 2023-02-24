
export function getTriangleArray(triangleLength: number): Array<Array<number>> {

  const triangle: Array<Array<number>> = [];

  for (let i = 1; i <= triangleLength; i++) {
    const triangleLevel: Array<number> = new Array(i);
    triangle.push(triangleLevel);
  }
  return triangle;
}