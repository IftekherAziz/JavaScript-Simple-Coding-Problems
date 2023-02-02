function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

const myString1 = "Hello, World!";
console.log(reverseWords(myString1));


// reverse using split function and loop
function reverseWord(str) {
    let words = str.split(' ');
    let reversedWords = [];
    for (let i = words.length -1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }
    return reversedWords.join(' ');
}

const myString2 = "I am a good boy";
console.log(reverseWord(myString2));