const add = function(firstNumber, secondNumber) {
	result = firstNumber + secondNumber;
  return result;
};

const subtract = function(firstNumber, secondNumber) {
	result = firstNumber - secondNumber;
  return result;
};

const sum = function(numbers) {
	result = numbers.reduce((result, number) => result + number, 0);
  return result;
};

const multiply = function(numbers) {
  result = numbers.reduce((result, number) => result * number, 1);
  return result;
};

const power = function(number, exponent) {
	let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * number;
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
