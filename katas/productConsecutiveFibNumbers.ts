// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

type ProductFibonacci = [number, number, boolean];

const fibonacciValues: Array<number> = [0];

function fibonacci(n: number): number {

  if (fibonacciValues[n] !== undefined) return fibonacciValues[n];

  let result: number;

  if (n <= 2) {
    result = 1;
  } else {
    result = fibonacci(n - 1) + fibonacci(n - 2);
  }
  fibonacciValues[n] = result;
  return result;
}
export function productFib(prod: number): ProductFibonacci {

  let n = 1;
  const result: ProductFibonacci = [n - 1, n, false];

  while (fibonacci(n - 1) * fibonacci(n) < prod) {
    n++;
  }
  result[0] = fibonacci(n - 1);
  result[1] = fibonacci(n);
  if (fibonacci(n - 1) * fibonacci(n) === prod) result[2] = true;
  return result;
}