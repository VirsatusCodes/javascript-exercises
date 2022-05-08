const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  let total = 0;
	for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};
// couldve used array.reduce for the above and below function
//same end but written faster for me if used. 
const multiply = function(array) {
  let total = array [0];
	for (let i = 1; i < array.length; i++) {
    total = array[i] * total;
  }
  return total;
};

const power = function(a, b) {
  let total = 1;
	for (let i = 0; i < b; i++) {
    total = total * a;
  }
  return total;
};

const factorial = function(a) {
	let total = 1;
  for(let i = a; i > 1 ;i-- ) {
    total = i * total;
  }
  return total;
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
