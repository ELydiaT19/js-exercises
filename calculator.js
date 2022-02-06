
const add = function(...input) {
	let result = 0;
  for (let i = 0; i < input.length; i++) {
    let currentValue = input[i];
    result += currentValue;
  }
  return result; 
};

const subtract = function(...input) {
  let result = input[0];
  for (let i = 1; i < input.length; i++) {
    result -= input[i];
  }
  return result;
};

const sum = function(input) {
  let result = input.reduce(function(accumulator, currentValue) {
    accumulator += currentValue;
    return accumulator;
  }, 0);
  return result; 
};

const multiply = function(input) {
  let result = input.reduce(function(accumulator, currentValue) {
    accumulator *= currentValue;
    return accumulator;
  }, 1);
  return result; 
};

const power = function(number, power) {
  let result = number;
  for (let i = 0; i < power -1 ; i++) {
    result *= number;   
  }
  return result; 
};

const factorial = function(number) {
	let result = 1;
  let factorialNumber = number;
  for (let i = 0; i < number; i++) {
    result = result * factorialNumber;
    factorialNumber = factorialNumber - 1;
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
