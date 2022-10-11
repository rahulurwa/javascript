//Array.from() and pass in prices as the first argument, and an arrow function as the second argument.
let prices = [500, 700, 1000];
let taxed = Array.from(prices, price => price * 1.05);
console.log(taxed);     // [525 ,735 ,1050]

//find()