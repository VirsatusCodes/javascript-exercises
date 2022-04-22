const output = []
const repeatString = function(string, num) {
output.splice(0, output.length);
for (let i = 0; i < num; i++){
output.push(string)
}
if ( num >= 0 )
return output.join("");
else return "ERROR"
};

// Do not edit below this line
module.exports = repeatString;

//mine was more complicated then the solution provided, i did not need to use arrays at all,
// i had thought of using += and misunderstood its role and thought it couldnt be used,
// i was wrong.