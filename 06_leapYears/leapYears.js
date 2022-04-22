const leapYears = function(year) {
if (Number.isInteger(year / 4) && !Number.isInteger(year/100)) {
 return true 
}
else if (Number.isInteger(year/100) && Number.isInteger(year/400)){
 return true
}
else return false
};


// when i was coding this i tried reallyhard to do 
//(Number.isInteger(year % 4) but i didnt realize the syntax doesnt work
//properly with that, you have to use a division sign, little details
//like testing exact syntax of examples can be important, dont 
//forget!

//ODIN soution! they did use remainder but in a simpler way
//i had the right idea with my initial code of doing
//Number.isInteger(year % 4) === 0 but i didnt realize i needed
//to lose the Number.isInteger() portion, doi makes sense now that
//i think about it more. and yes there is a shrter version of the 
//code they used as i thought using && as well as || , i would
//have been more willing to use it if i had known i should have
//removed Number.isInteger() because it doenst take up too much
//length. also their solution uses less processing power
//because less functions, so thats good to keep in mind.

//i had slight trouble not reading the prompt properly,
//i had to input a rule where divisible by 4 and NOT divisible by 100
// is there and another rule where if divisible by 100 and 400 is okay
// because otherwise 4 is the same for century ones (aka 100 is also
//divisible by 4 and the subsequent numbers so must include that rule.)

// you should be able to input that all in one line using an 
//or statement but i like this more for visual appeals sake, at
//least since im not worried about execution time or taking
//up too much space with code etc.

//also i noticed a return value wasnt changing despite me changing it
//took me a bit too long to realize the issue was with a previous
//line of code, keep that in mind.

// Do not edit below this line
module.exports = leapYears;

