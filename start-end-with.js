const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.startsWith("night"));
// Expected output: false


const str2 = 'Cats are the best!';

console.log(str2.endsWith('best!'));
// Expected output: true
console.log(str2.endsWith('best', 17));
// Expected output: true

const str3 = 'Is this a question?';
console.log(str3.endsWith('question'));
// Expected output: false

