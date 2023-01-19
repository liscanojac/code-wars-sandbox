// https://www.codewars.com/kata/529adbf7533b761c560004e5

export function fibonacci(n: number, fibonacciValues: Array<number> = [0]): number {

  if (fibonacciValues[n] !== undefined) return fibonacciValues[n];

  let result: number;
  
  if (n <= 2) result = 1;
  else result = fibonacci(n - 1, fibonacciValues) + fibonacci(n - 2, fibonacciValues);

  fibonacciValues[n] = result;
  return result;
}

// export function fibonacci(n: number): number {

//   if (!n) return 0;
//   if (n <= 2) return 1;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }