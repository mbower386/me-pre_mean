function coinChange(amount) {
  // var coins = { dollar: 100, quarter: 25, dime: 10, nickel: 5, penny: 1 };
  var change = { dollars: 0, quarters: 0, dimes: 0, nickels: 0, pennies: 0 };

  while (amount > 0) {
    if (amount % 100 === 0) {
      change.dollars++;
      amount -= 100;
    } else if (amount % 25 === 0) {
      change.quarters++;
      amount -= 25;
    } else if (amount % 10 === 0) {
      change.dimes++;
      amount -= 10;
    } else if (amount % 5 === 0) {
      change.nickels++;
      amount -= 5;
    } else if (amount % 1 === 0) {
      change.pennies++;
      amount -= 1;
    }
  }

  return change;
}

console.log(coinChange(312));

console.log(coinChange(78));