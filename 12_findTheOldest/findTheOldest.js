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

// Do not edit below this line


module.exports = findTheOldest;
