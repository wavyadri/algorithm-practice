// codility
// source: https://stackoverflow.com/questions/59016562/parse-csv-records-in-to-an-array-of-objects-in-javascript
function csvToJSON(csv) {
  var lines = csv.split('\n');
  var result = [];
  var headers;
  headers = lines[0].split(',');

  for (var i = 1; i < lines.length; i++) {
    var obj = {};

    if (lines[i] == undefined || lines[i].trim() == '') {
      continue;
    }

    var words = lines[i].split(',');
    for (var j = 0; j < words.length; j++) {
      obj[headers[j].trim()] = words[j];
    }

    result.push(obj);
  }
  return result;
}

function solution(S, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  // csv to array of objects
  let values = csvToJSON(S);
  let max = Number(values[0][C]);

  for (let i = 1; i < values.length; i++) {
    if (Number(values[i][C]) > Number(max)) {
      max = Number(values[i][C]);
    }
  }

  return max;
}
