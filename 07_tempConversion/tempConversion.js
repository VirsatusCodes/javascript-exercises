const ftoc = function(f) {
output =(f-32) * (5/9);
return Number(output.toFixed(1));
};

const ctof = function(c) {
  output =c*(9/5) + 32;
  return Number(output.toFixed(1));
};

// this one was faily simple, the only "difficult" part was that
// i had to look up how to round numbers to a certain decimal
//but obviously that was very simple, and then using Number()
// to convert from a string to a number, and including the formula
//for converting f to c and c to f, fairly easy on this one.

// ODIN solution used Math.round instead of Number() and toFixed() 
//technicly less functions, so easier computing load, so better.
//why do more when you can do less?

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
