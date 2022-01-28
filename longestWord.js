// Longest Word
// https://coderbyte.com/editor/Longest%20Word:JavaScript

const longestWord = (s) => {
  // remove non letter chars & create array
  let words = s.replace(/[^a-zA-Z ]/g, '').split(' ');

  let maxLength = 0;
  let longest;
  for (const word of words) {
    if (word.length > maxLength) {
      longest = word;
      maxLength = word.length;
    }
  }
  return longest;
};

console.log(longestWord('I love dogs!'));
// output: love
