const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst);

const searchTerm1 = "cat";
const indexOfFirst1 = paragraph.indexOf(searchTerm1);
// console.log(indexOfFirst1);

if (paragraph.indexOf(searchTerm1)!==-1) {
    console.log('Exist inside the string');
}
else{
    console.log('Does not exist inside the string');
}