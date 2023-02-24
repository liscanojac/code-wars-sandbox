// export interface MyInterface {
//   name: string;
//   sayHello(): void;
//   sayGoodbye(): void;
// }
class MyClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  
  sayHello(): void {
    console.log(`Hello, ${this.name}!`);
  }
}
export default MyClass;