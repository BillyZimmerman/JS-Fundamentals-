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

//==================================================================================
// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
  }
  console.log(fruitProcessor(2, 3));
// ===================================================================
      const calcAge = function(birthYear) {
        return 2022 - birthYear;
      }

      const yearsUntilRetirement = function(birthYear, firstName){
      const age = calcAge(birthYear)
      const retirement = 65 - age;

      if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
      } else {
        console.log(`${firstName} has already retired! `)
        return -1;
      }
    }
    console.log(yearsUntilRetirement(1987, "Billy"));
    console.log(yearsUntilRetirement(1950, "Kelsey"));