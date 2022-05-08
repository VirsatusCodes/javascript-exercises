const palindromes = function (string) {
    let placeholder ='';
    let reverseString = "";
    for (i = string.length-1 ; i > -1 ; i--) {
        if (string[i] === '!'||string[i] === " " || string[i] === "," || string[i] === "."  ) {continue; }
        reverseString += string[i];
    };
    for (f = 0 ; f < string.length ; f++) {
        if (string[f] === '!' ||string[f] === " " || string[f] === "," || string[f] === "." ) {continue; }
        placeholder += string[f];
    };
    reverseString.toLowerCase();
    placeholder.toLowerCase();
if ( reverseString.toLowerCase() === placeholder.toLowerCase()) return true;
else return false;
};
// I recognize this is probably a WAY more complicated way to do this
//then is necessary, looking forward to seeing the "official" solution

// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^a-z]/g, ""); //grabs whatever isnt an a-z character and replaces it with nothing else,  so 'A car, a man, a maraca.' becomes 'acaramanamaraca' (/[^a-z]/g is a regular expression!,[^a-z] means a-z lower ONLY, the g means global search, aka all the letters there, not just a specified amount. )
//     return (
//       processedString
//         .split("") //splits a string into an array of substrings, because no space its splitting every letter into its on spot in an array.
//         .reverse() //reverses the order of it all
//         .join("") == processedString // combines into 1 no space string and then compares it to the original version before all these changes. if its the same then it returns true.
//     );
//   };

// that looks about right, i knew there was going to be (/[^a-z]/g, "") this
//somewhere at some point it was taught to us but not explained how to do
//unless you watched a guys video series, could have gone back to learn it
//specifically for this but opted to wait to see how it was implemented 
//here instead since i knew i could make it work in a weird way.
// then i knew after getting rid of the special characters it would be split 
// up and reversed and rejoined, but i didnt know the syntax for those and 
// wanted to try and create a solution instead, and just have the reasearch
// presented to me with the solution they would present to me, but only felt 
// comfortable doing it this way because i clearly understood it was possible 
// more efficiently and they would show it to me.


// // Do not edit below this line
module.exports = palindromes;
