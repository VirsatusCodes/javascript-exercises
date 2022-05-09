const findTheOldest = (function(people) {

    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) people[i].yearOfDeath = new Date().getFullYear();
            };

    const sorted =  people.sort(function(a,b) {
     if(a.yearOfDeath -a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    };
    
    });
    return sorted[0]
  });

//previously it said try not to use the value "undefined" as it can sometimes
//be used in coding as a value but using null doesnt work and i dont know
//how else to sense for an undeclared value, though the odin solution
//will probably show me how. i piggy backed off of the sort function
// i was shown to use in the wesbos videos shown previously and then 
//added some extra steps to meet my needs. had to nest a function within
// a function to get this one to work and my loop of course.
//not too tough once i identified exactly what i needed to do.
//understanding your goal and taking it one at a time without letting yourself
//get buried in the possibilities is very important.

// my solution ended up being completely different lol instead of looking
// for a undefined value they just made a function only taking in birth and 
// death and if there was no death they added the current year.

// const findTheOldest = function(array) {
//     return array.reduce((oldest, currentPerson) => {
//       const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//       const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//       return oldestAge < currentAge ? currentPerson : oldest;
//     })
//   };
  
//   const getAge = function(birth, death) {
//     if (!death) {
//       death = new Date().getFullYear();
//     }
//     return death - birth;
//   };

 // their solution actually takes a similar amount of lines of code, but mine
 //takes less functions i think? however idk how the comparison would be
 //for large amounts of data flowing through each of ours (though mine could
 //be shortened if i used the ? syntax in mine as well which i could)
 //though i feel like mine is easier to understand at a glance, at least
 //for me though ofc that could just be bias and lack of experience.

// Do not edit below this line


module.exports = findTheOldest;
