import MyClass from "./test";

// declare module './test' {
//   interface MyClass {
//     sayGoodbye(): string;
//   }
// }

MyClass.prototype.sayGoodbye = function() {
  return this.name;
}
