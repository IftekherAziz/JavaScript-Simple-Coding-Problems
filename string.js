const string1 = "A string primitive";
console.log(string1);

const string2 = "Also a string primitive";
console.log(string2);

const string3 = 'Yet another string primitive';
console.log(string3);

const string4 = new String("A String object");
console.log(string4);

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
