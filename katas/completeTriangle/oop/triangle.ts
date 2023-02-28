// import { TriangleInterface, TriangleSize } from "../interfaces/completeTheTrianglePattern";
// import { triangleValidator } from "../functional/triangleSizeValidator";

// // export class Triangle implements TriangleInterface {
// //   start: number;
// //   finish: number;
// //   lenght: number;
// //   valid: boolean;
// //   tier: number;
// //   vertixFunctionIndex: 1 | 2 | 0;
// //   array: Array<Array<number>>;
// //   constructor(m: number, n: number) {
// //     this.start = m;
// //     this.finish = n;
// //     this.lenght = this.triangleValidator().length
// //     this.vertixFunctionIndex = 0;
// //   }
// //   triangleValidator(): TriangleSize {
// //     return triangleValidator();
// //   }
// // }


// function Triangle(m: number, n: number) {
//   this.start = m;
//   this.finish = n;
// }

// Triangle.prototype.triangleValidator = function() {
//   return this.start;
// }

export class Triangle {
  start: number;
  finish: number;
  private tier: number;
  private valid: boolean;
  private length: number;
  private functionIndex: number;
  arr: Array<Array<number>>;
  str: string;
  constructor (m: number, n: number) {
    this.start = m;
    this.finish = n;
    this.functionIndex = 0;
    this.tier = 0;
    this.length = 0;
    this.valid = false;
    this.arr = [];
  };

  private functionIndexCounter() {
    if (this.functionIndex === 2) {
      this.functionIndex = 0;
      this.tier++;
    } else {
      this.functionIndex++;
    }
  };

  private sizeValidator() {

    const steps = this.finish - (this.start - 1);
    let i = 1;
    let accumulator = i;

    while (accumulator < steps) {
      i++;
      accumulator += i;
    }

    this.valid = accumulator === steps;
    this.length = i;
  };

  private getArr() {
    for (let i = 1; i <= this.length; i++) {
      const triangleLevel: Array<number> = new Array(i);
      this.arr.push(triangleLevel);
    }
  };

  private formatNumber(): number {
    return Number(this.start.toString().slice(-1));
  }
  
  fillArr() {
    const vertixFunctions = [this.downwardHelper(), this.baseHelper(), this.upwardHelper()];
    while (this.start <= this.finish) {
      vertixFunctions[this.functionIndex];
      this.functionIndexCounter();
    }
    console.log(this.arr);
  }
  private downwardHelper() {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].length - 1 - this.tier < 0 || this.arr[i][this.arr[i].length - 1 - this.tier] > 0) continue;
      this.arr[i][this.arr[i].length - 1 - this.tier] = this.formatNumber();
      this.start++;
    }
  };
  private upwardHelper() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (!this.arr[i][this.tier] && this.tier < this.arr[i].length) {
        this.arr[i][this.tier] = this.formatNumber();
        this.start++;
      }
    }
  };
  private baseHelper() {
    for (let i = this.arr[this.arr.length - 1 - this.tier].length - 1; i >= 0; i--) {
      if (!this.arr[this.arr.length - 1 - this.tier][i]) {
        this.arr[this.arr.length - 1 - this.tier][i] = this.formatNumber();
        this.start++;
      }
    }
  };
}