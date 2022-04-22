


const removeFromArray = function(originalArray,...removeFromArray) {
return originalArray.filter(x => !removeFromArray.includes(x))
};
// the ! makes it so includes essentially means discludes instead?, which 
// is what i needed here, i THINK anywyas, test when you study next!

// note** you didnt make this yourself you searched "how to compare"
// "two arrays" and found this when looking for a specific command
// because you found this so simply and youll always have access to the
//internet and if facing this problem you could find the same solution
// you decided to use it and study how it works

// .filter() requires a function to work, .includes() returns true or fale
// overall it removes certain given inputs and returns a new array
//it DOES NOT change the original array.

//in the official solutions the above response is the
// "simpler but more advances solution" (with a few minor differences,
// it deals with less inputs and also creates its own array for 
//future use, though that part is easliy done if i wanted to)
//. the "easier" one takes only one input as ...args and selects
// the first item in it as the value to bypass needing two inputs.
// then another empty array is created. then using .forEach 
//(it executes a function on each value in the array) they go through
// the "originalArray" equivalent and if there is NOT a match detected
// using a !args.includes(x) argument to sort they use .push to
//push the wanted info into the newArray which is then returned.



// Do not edit below this line
module.exports = removeFromArray;


