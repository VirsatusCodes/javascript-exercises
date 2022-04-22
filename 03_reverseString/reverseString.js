const letters = []

const reverseString = function(string) {
let duration = string.length
letters.splice(0, letters.length);
for (let i = 0; i < duration; i++) {
letters.push(string.slice(string.length-1));
string.slice(string.length-1);
string = string.slice(0,string.length-1);
}
return letters.join("");
};

// Do not edit below this line
module.exports = reverseString;


// const reverseString = function(string) {
//  return string.split('').reverse().join('');
// };
// apparently theres a much simpler process listed in solutions ^
//it returns the given info after changing it into a single character
// array by doing a no space split, reverses it using the array method reverse
// and then turns it back into a string without spaces with the join command.
// i was unaware that there existed a command to reverse the order of an array
// and one to split them into individual characters, the info for reversing was never
//presented to me but i should have known about the split into individual characters command,
// i had been told of it previously, maybe i should search if a certain thing is possible in the 
//short term rather then bootlegging a function myself to do so, a quick google search would have saved
// me some effort, something like "splitting a string into characters", no? "splitting an array into characters", aaa yesss
// keep in mind for future!