function fizz_buzz(num) {
  var output = "";
  var count = 1;

  if (Number.isInteger(num)) {
    while (count <= num) {
      if ((count % 5 !== 0) && (count % 3 === 0)) {
        output += "Fizz";
      }
      if ((count % 5 === 0) && (count % 3 !== 0)) {
        output += "Buzz";
      }
      if ((count % 5 === 0) && (count % 3 === 0)) {
        output += "FizzBuzz";
      }
      if ((count % 5 !== 0) && (count % 3 !== 0)) {
        var str = count.toString();
        output += str;
      }
      if (count < num - 1) {
        output += ", ";
      }
      if (count == num - 1) {
        output += ", and ";
      }
      if (count == num) {
        output += ".";
      }

      count++;
    }
  }
  else {
    output = "Parameter must be a positive number";
  }

  return output;
}

console.log(fizz_buzz(15));