// Math.abs();
function difference(a, b) {
  return Math.abs(a - b);
}
console.log(difference(3, 5));
// Expected output: 2
console.log(difference(5, 3));
// Expected output: 2


// Math.pow()
console.log(Math.pow(2, 3));
// Expected output: 8
console.log(Math.pow(7, -2));
// Expected output: 0.02040816326530612
// (1/49)
console.log(Math.pow(-7, 0.5));
// Expected output: NaN


// Math.round()
console.log(Math.round(0.9));
// Expected output: 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6


// Math.ceil();
console.log(Math.ceil(.95));
// Expected output: 1
console.log(Math.ceil(4));
// Expected output: 4
console.log(Math.ceil(7.004));
// Expected output: 8
console.log(Math.ceil(-7.004));
// Expected output: -7


// Math.floor()
console.log(Math.floor(5.95));
// Expected output: 5
console.log(Math.floor(5.05));
// Expected output: 5
console.log(Math.floor(5));
// Expected output: 5
console.log(Math.floor(-5.05));
// Expected output: -6


// Math.random()
console.log(Math.random());

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));
// Expected output: 0, 1 or 2
console.log(getRandomInt(1));
// Expected output: 0
console.log(Math.random());
// Expected output: a number from 0 to <1

