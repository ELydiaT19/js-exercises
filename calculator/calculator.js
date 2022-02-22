const add = function(...input) {
  return input.reduce(
    (accumulator, currentValue) => accumulator += currentValue,
    0
  )
};

const subtract = function(...input) {
  return input.reduce(
    (accumulator, currentValue, currentIndex) => currentIndex === 0 ? accumulator : accumulator - currentValue,
    input[0]
  )
};

const sum = function(input) {
  // no need to define & return "result" -> directly return input.reduce
  return input.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
};

const multiply = function(input) {
  return input.reduce(
    (accumulator, currentValue) => accumulator *= currentValue,
    1
  )
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
