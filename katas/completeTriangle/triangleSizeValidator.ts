import { TriangleSize } from "../../interfaces/completeTheTrianglePattern";
import { Triangle } from "./triangle";

export function triangleSizeValidator(m: number, n: number): TriangleSize {

  const steps = n - (m - 1);
  let i = 1;
  let accumulator = i;

  while (accumulator < steps) {
    i++;
    accumulator += i;
  }

  return {
    valid: accumulator === steps,
    length: i
  };
}

export function triangleValidator(this: Triangle): TriangleSize {
  const steps = this.finish - (this.start - 1);
  let i = 1;
  let accumulator = i;

  while (accumulator < steps) {
    i++;
    accumulator += i;
  }
  return {
    valid: accumulator === steps,
    length: i
  }
}