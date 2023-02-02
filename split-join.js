const str = "The quick brown fox jumps over the lazy dog. There was a cat which color was dark black";

// Split the string
const words = str.split(' ');
console.log(words);

const sentencse = str.split('.');
console.log(sentencse);

const char = str.split('');
console.log(char);

// Slice the string
 const partial = str.slice(4, 9);
    console.log(partial);

// String.prototype.trim()
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";
console.log(greeting.trim());
// Expected output: "Hello world!";

// String.prototype.concat();
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"
console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

const lines = [
  "The quick brown fox jumps over the lazy dog",
  " There was a cat which color was dark black",
];
const line = lines.join('.');
console.log(line);