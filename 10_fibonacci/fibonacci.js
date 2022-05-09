const fibonacci = function(input) {
    if (input < 0) return 'OOPS';
let a = 0;
let b = 1;
let vary = 1
for (let i = 1; i < input; i++) {
    vary = b;
    b = a + b;
    a = vary;
}
return b;
};
// this one was very difficult for me and i ended up having to take a peek
//at the answer, i knew i needed the variables to affect eachother
//and even knew i needed 3 variables for this to happen, but i was
//trying to make it work on 2 lines instead of 3 and kept going in
//circles and confusing myself, decided at a certain point to just take the Loss.
// last time this happened i just gave myself some time to think about it
// but i am trying to be more aggressive with the speed of my learning
// so for something like this im willing to move forward.

// Do not edit below this line
module.exports = fibonacci;
 