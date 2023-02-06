
export function narcissistic(value: number): boolean {

  const valueStr = value.toString();
  let sum = 0;

  for (let i = 0; i < valueStr.length; i++) {

    sum += toThePowerOf(valueStr[i], valueStr.length);

    if(sum > value) return false;
  }

  return sum === value;
}

function toThePowerOf(value: string, power: number): number {

  return Number(value) ** power;
}