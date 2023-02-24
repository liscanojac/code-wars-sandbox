import { TriangleInterface, TriangleSize } from "../interfaces/completeTheTrianglePattern";
import { triangleValidator } from "../functional/triangleSizeValidator";

// export class Triangle implements TriangleInterface {
//   start: number;
//   finish: number;
//   lenght: number;
//   valid: boolean;
//   tier: number;
//   vertixFunctionIndex: 1 | 2 | 0;
//   array: Array<Array<number>>;
//   constructor(m: number, n: number) {
//     this.start = m;
//     this.finish = n;
//     this.lenght = this.triangleValidator().length
//     this.vertixFunctionIndex = 0;
//   }
//   triangleValidator(): TriangleSize {
//     return triangleValidator();
//   }
// }


function Triangle(m: number, n: number) {
  this.start = m;
  this.finish = n;
}

Triangle.prototype.triangleValidator = function() {
  return this.start;
}
