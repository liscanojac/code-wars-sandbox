import { VertixHelperType } from "../interfaces/completeTheTrianglePattern";

export const vertixHelper: VertixHelperType = {
  tier: 0,
  functionIndex: 0,
  functionIndexCounter() {
    if (vertixHelper.functionIndex === 2) {
      vertixHelper.functionIndex = 0;
      vertixHelper.tier++;
    } else {
      vertixHelper.functionIndex++;
    }
  }
}