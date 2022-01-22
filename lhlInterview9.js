// create a set from array
let arr = [
  { winner: 'Alice', loser: 'Bob', loser_points: 3 },
  { winner: 'Carol', loser: 'Dean', loser_points: 1 },
  { winner: 'Elise', loser: 'Bob', loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean', loser_points: 3 },
  { winner: 'Dean', loser: 'Elise', loser_points: 2 },
];

let set = new Set(
  arr.map((item) => item.loser).concat(arr.map((item) => item.winner))
);
console.log(set);
