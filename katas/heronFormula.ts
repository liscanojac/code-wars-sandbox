function getTriangleArea(a: number, b: number, c: number): number {
  return (a + b + c)/ 2;
}

export function heronFormula(a: number, b: number, c: number): number {

  const s = getTriangleArea(a, b, c);

  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}