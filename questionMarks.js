const questionMarks = (str) => {
  var matches = str.match(/\d[\w\?]*?\d/g);
  if (!matches) return false;

  var result = false;

  for (var match of matches) {
    if (Number(match[0]) + Number(match[match.length - 1]) === 10) {
      // count the numbers of ?'s in the substring between two numbers
      if (match.split('').filter((char) => char === '?').length === 3) {
        result = true;
      } else {
        return false;
      }
    }
  }

  return result;
};

console.log(questionMarks('acc?7??sss?3rr1??????5'));
console.log(questionMarks('aa6?9'));
