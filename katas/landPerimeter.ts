
export function landPerimeter(arr: Array<string>): string {

  return `Total land perimeter: ${landCalculator(arr)}`;
}

function landCalculator(land: Array<string>): number {

  let perimeter = 0;

  for (let i = 0; i < land.length; i++) {

    for (let j = 0; j < land[i].length; j++) {

      if (land[i][j] === 'X') perimeter += perimeterCalculator(land, { i, j });
    }
  }

  return perimeter;
}

function perimeterCalculator(land: Array<string>, { i, j }: { i: number, j: number }): number {

  const emptySpace = 'O';
  let perimeter = 0;

  // UpperSide
  if (i === 0 || (i > 0 && land[i - 1][j] === emptySpace)) perimeter++;

  // Lower Side
  if (i === land.length - 1 || (i < land.length - 1 && land[i + 1][j] === emptySpace)) perimeter++;

  // Left Side
  if (j === 0 || (j > 0 && land[i][j - 1] === emptySpace)) perimeter++;

  // Right Side
  if (j === land[i].length - 1 || (j < land[i].length - 1 && land[i][j + 1] === emptySpace)) perimeter++;

  return perimeter;
}