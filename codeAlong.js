let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// DECLARING A VARIABLE OF firstName WITH A VALUE OF billy
let firstName = "billy";
console.log(firstName);

// BASIC MATH OPERATORS
// const now = 2037
// const ageBilly = now - 1987;
// const ageKelsey = now - 1990;
// console.log(ageBilly, ageKelsey);

// console.log(ageBilly * 2, ageBilly / 10, 2 ** 3 );
//  2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Billy";
// const lastName = "Zimmerman";
// console.log(firstName +  " " + lastName)

// ASSIGNMENT OPERATORS
// let x = 10 + 5  //15
// x += 10;        // x = x + 10 = 25
// x *= 4;         //x = x * 4 = 100
// x++;            // x = x + 1 = 101
// x--;            // x = x - 1 = 100
// console.log(x);

// COMPARISON OPERATORS 
// console.log(ageBilly > ageKelsey);
// console.log(ageKelsey >= 18);

// const isFullAge = ageKelsey >= 18;
// console.log(now - 1991 > now - 2018)

// const now = 2037
// const ageBilly = now - 1987;
// const ageKelsey = now - 1990;

// let x, y;
// x = y = 25 - 10 - 5  // x = y = 10
// console.log(x, y);

// const averageAge = (ageKelsey + ageBilly) / 2;
// console.log(ageBilly, ageKelsey, averageAge);

// =================================================
// const firstName = 'Billy';
// const job = "student";
// const birthYear = 1987;
// const currentYear = 2022;

// const billy = "I am " + firstName + ", a " + (currentYear - birthYear) + " year old " + job + "!"
// console.log(billy);

// // using a template literal instead
// const billyNew = `I am ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
// console.log(billyNew);

// // template literal with multi line strings
// console.log(`String with 
// multiple
// lines`);

// IF/ELSE STATEMENTS 

const age = 13;
// const isOldEnough = age >= 16;

if(age >= 16) {
  console.log("Yay you can drive!");
} else {
  const yearsLeft = 16 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years :) `)
}

const birthYear = 1987;
let century = "";

if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`you were born in the ${century} century`);

