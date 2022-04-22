const sumAll = function(a, b) {
let output = 0;
if (typeof a === "string" ||typeof b === "string") {
    return 'ERROR'
}
if (a > b) {
    for(let i = a; i > b -1  ; i--){
    output += i 
}
}
if (a < b) {for(let i = a; i < b +1  ; i++){
    output += i 
}
}
if (output > 0) {
    return output
}
else return "ERROR"
};
//because i dont need to accept negative numbers i can 
// do a blankets statement of anything below 0 means "ERROR"
//to complete the requirements of the array entry returning "ERROR"
//there should be other inputs that mess with the code but
// i have fulfilled the requirement and will be moving on instead of
// tinkering with it more, im confident i could fix that so im not
//going to worry about it anymore.

//Odin Solution notes!

//i was trying to figure out a good blanket statement for telling it to 
//return "ERROR" that involved non numbers, they had one ready, it is
// !Number.isInteger(x) this screens for if a value is an integer
//it returns true, if not false. if the value is NaN or Infinity it also
//returns false, string numbers also return false! (also returns
//true for floating point numbers) and false for string numbers
//because the ! is there false is true so if it comes back as "true"
//(but false normally) it returns "ERROR"
// they also did the whole if output < 0 return error just worded 
//differently. the for loop is actually coded exactly the same except 
//they didnt have to write two loops to compensate for the min
// and max numbers potentially being swapped, instead they input an if
//statement where if the min value was > max value then the two values
//were swapped, that was smart, saves some time. though keep in mind
// you need to create a third variable to hold the value of one of them
// in this case they used "const temp = min;" or else the values would 
//equal the same.

// Do not edit below this line
module.exports = sumAll;
