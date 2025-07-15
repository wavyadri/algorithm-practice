const transactions = [
  { id: 't_01', customer: 'Rose Roberts', amount: 84 },
  { id: 't_02', customer: 'Chris Cook', amount: 30 },
  { id: 't_03', customer: 'Mary Martin', amount: 42 },
  { id: 't_04', customer: 'Susan Smith', amount: 26 },
  { id: 't_05', customer: 'Rose Roberts', amount: -84 },
  { id: 't_06', customer: 'Rose Roberts', amount: 48 },
  { id: 't_07', customer: 'Susan Smith', amount: 104 },
  { id: 't_08', customer: 'Larry Lewis', amount: 140 },
  { id: 't_09', customer: 'Mary Martin', amount: 10 },
  { id: 't_10', customer: 'Chris Cook', amount: 60 },
  { id: 't_11', customer: 'Susan Smith', amount: -26 },
  { id: 't_12', customer: 'Larry Lewis', amount: -140 },
  { id: 't_13', customer: 'Rose Roberts', amount: 26 },
  { id: 't_14', customer: 'Ryan Roberts', amount: 44 },
];

// 1. print out each name line item
// transactions.map((transaction) => {
//   return (
//     <div key={transaction.id}>
//       <p>{transaction.customer}</p>
//       <p>{transaction.amount}</p>
//     </div>
//   );
// });

// 2. calculate the customer with the highest total
// a) get individual totals
// b) find max
const customerTotals = (transactions) => {
  // {customer: total}
  let totals = {};

  console.log(totals);

  for (let i = 0; i < transactions.length; i++) {
    if (totals[transactions[i].customer] === undefined) {
      totals[transactions[i].customer] = transactions[i].amount;
    } else {
      totals[transactions[i].customer] += transactions[i].amount;
    }
  }

  return totals;
};

const maxCustomer = (totals) => {
  let maxCustomer = '';
  let maxAmount = 0;
  for (const key in totals) {
    if (totals[key] > maxAmount) {
      maxAmount = totals[key];
      maxCustomer = key;
    }
  }
  return maxCustomer;
};

const totals = customerTotals(transactions);
const topCustomer = maxCustomer(totals);

console.log(topCustomer);
