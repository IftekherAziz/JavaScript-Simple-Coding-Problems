// Fibonacci numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]
// The next number is found by adding up the two numbers before it.

// fibo[2] = fibo[1] + fibo[0];
// fibo[3] = fibo[2] + fibo[1];
// fibo[4] = fibo[3] + fibo[2];
// fibo[50] = fibo[49] + fibo[48];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

// 1. Write a function that returns the nth Fibonacci number.
// 2. Write a function that returns the first n Fibonacci numbers.

// fibo[i] = fibo[i-1] + fibo[i-2];
const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);