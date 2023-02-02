// const sentence = "The quick brown fox jumps over the lazy dog.";

// const word = "fox";

// console.log('The word "${word}" ${
// sentence.includes(word) ? "is" : "is not"
//   } in the sentence'
// );
// Expected output: "The word "fox" is in the sentence"

const text =
  "In publishing and graphic design. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. A typeface without relying on meaningful content. ";

const searchString = "Design";

// const doesExist = text.includes("Lorem");
// const doesExist = text.includes("lorem");

const doesExist = text.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExist);
