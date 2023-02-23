import { Triangle } from "../katas/completeTriangle/triangle";

type TriangleSize = {
  valid: boolean;
  length: number;
};

type VertixHelperType = {
  tier: number;
  functionIndex: number;
  functionIndexCounter: () => void
};

interface TriangleInterface {
  // start: number;
  // finish: number;
  // lenght: number;
  // valid: boolean;
  // tier: number;
  // vertixFunctionIndex: 1 | 2 | 0;
  array: Array<Array<number>>;
  triangleValidator(this: Triangle): TriangleSize;
  getTriangleArray(): Array<Array<number>>;
  vertixHelperCounter(): void;
  vertixHelpers: [() => void, () => void, () => void];
  downwardVertixHelper(): void;
  upwardVertixHelper(): void;
  baseVertixHelper(): void;
}

export {
  TriangleSize,
  VertixHelperType,
  TriangleInterface
}