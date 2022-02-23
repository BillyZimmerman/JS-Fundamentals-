'use strict';

// // FUNCTION EXPRESSIONS VS DECLARATIONS
// // ====================================

// function logger() {
//   console.log("my name is slim shady")
// }
// // calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// // "(5, 0)" is the argument for apples and oranges 
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// // FUNCTION DECLARATION
// function billysBirthYear(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = billysBirthYear(1987);
// console.log(age1 + " years old!");

// // FUNCTION EXPRESSION
// const kelseysBirthYear = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = kelseysBirthYear(1990);
// console.log("Billy will be " + age1,"and Kelsey will be " + age2 +" in the year 2037");

// ARROW FUNCTIONS 
// =============================

// arrow function conversion 
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const year = 2022 - birthYear;
//   const retirement = 65 - year;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1987, "Billy"));
// console.log(yearsUntilRetirement(1990, "Kelsey"));

// FUNCTIONS CALLING OTHER FUNCTIONS
//==================================================================================

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
//   }
//   console.log(fruitProcessor(2, 3));
// // ===================================================================
//       const calcAge = function(birthYear) {
//         return 2022 - birthYear;
//       }

//       const yearsUntilRetirement = function(birthYear, firstName){
//       const age = calcAge(birthYear)
//       const retirement = 65 - age;

//       if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//       } else {
//         console.log(`${firstName} has already retired! `)
//         return -1;
//       }
//     }
//     console.log(yearsUntilRetirement(1987, "Billy"));
//     console.log(yearsUntilRetirement(1950, "Kelsey"));

    // Intro to Arrays
    // =========================================================================

   //  const friend1 = "Ryan";
   //  const friend2 = "Vanessa";
   //  const friend3 = "Luis";

   //  const friends = ["Ryan", "Vanessa", "luis"];
   //  console.log(friends);

   //  // const years = new Array(1991, 1987, 2005, 2020);
    
   //  console.log(friends[0]);
   //  console.log(friends[2]);

   //  // Will list the friends array by number of friends (3)
   //  console.log(friends.length);
   //  // This will grab the last name in the friends array and log it
   //  console.log(friends[friends.length - 1]);
   //  // Replacing 'luis' for 'nic' by changing the arrays value
   //  friends[2] = "nic";
   //  console.log(friends);

   //  const firstName = 'Billy'
   //  // An array holding multiple values
   //  const billy = [firstName, 'Zimmerman', 2037 - 1987, "student", friends];
   //  console.log(billy)
   //  console.log(billy.length)

   //  // Exercise
   //  const calcAge = function(birthYear) {
   //     return 2022 - birthYear;
   //  }
   //  const years = [1990, 1967, 2002, 2010, 2018];

   //  const age1 = calcAge(years[0]);
   //  const age2 = calcAge(years[1]);
   //  const age3 = calcAge(years[years.length - 1]);
   //  console.log(age1, age2, age3);

   //  const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
   //  console.log(ages);

const friends = ['Tim', 'Russell', 'Blake'];
   // Using the push method to add an element to the end of an array
   const newLength = friends.push('Mark');
   console.log(friends);
   console.log(newLength);
   // using unshift to add a name to the beginning of the array
   friends.unshift('John');
   console.log(friends);
   //using the pop method to remove the last element 
   friends.pop();
   console.log(friends);
   // using the shift method to remove the first element 
   friends.shift();
   console.log(friends);
   //using indexOf method to call for the element you gives the index of the element you call
   console.log(friends.indexOf("Tim"));
   //Using includes method to see if either name is in the array which will return a boolean value
   console.log(friends.includes("Blake"))
   console.log(friends.includes("roy"))

   if (friends.includes('Tim')) {
      console.log("you have a friend named Tim")
   }
