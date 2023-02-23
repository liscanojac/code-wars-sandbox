
export function getTriangleArray(triangleLength: number): Array<Array<number>> {

  const triangle: Array<Array<number>> = [];

  for (let i = 1; i <= triangleLength; i++) {
    const triangleLevel: Array<number> = new Array(i);
    triangle.push(triangleLevel);
  }
  return triangle;
}

interface Greeter {
  
}
class Greeter {
  greeting: string;
  // greet(): string;
  constructor(message: string) {
    this.greeting = message;
  }
}
export {
  Greeter
}

// Greeter.prototype.greet = function() {
//   return this.greeting;
// }

// function Greeter(message: string) {
//   this.greeting = message;
// }
// function greeto(this: Greeter): string {
//   return this.greeting
// }

// Greeter.prototype = {
//   greet() {
//     return this.greeting;
//   }
// }
const test = new Greeter('test');
test.greet();