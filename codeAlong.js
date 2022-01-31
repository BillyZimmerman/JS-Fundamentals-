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

// const age = 13;
// // const isOldEnough = age >= 16;

// if(age >= 16) {
//   console.log("Yay you can drive!");
// } else {
//   const yearsLeft = 16 - age;
//   console.log(`You are too young. Wait another ${yearsLeft} years :) `)
// }

// const birthYear = 1987;
// let century = "";

// if(birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(`you were born in the ${century} century`);

// // TYPE CONVERSION
// // USING THE NUMBER CONVERSION FUNCTION TO MAKE A STRING A NUMBER
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// // CONVERTING A NUMBER TO A STRING, LESS COMMONLY USED 
// console.log(String(23));

// // TYPE COERCION - when two values are two different types or if you use a operator to do math with a string involved
// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3);
// console.log('23' * '4');
// console.log('23' / '4');

// // TRUTH AND FALSY VALUES 
// //  5 FALSY VALUES: 0, "", UNDEFINED, NULL, NaN
// console.log(Boolean(0)); //FALSE
// console.log(Boolean(undefined)); //FALSE
// console.log(Boolean('Billy')); //TRUE
// console.log(Boolean({})); //TRUE

// const money = 0;
// if(money){
//   console.log('Do not spend it all');
// } else {
//   console.log("get a job you loser!")
// }

// let height= "";
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// EQUALITY OPERATORS: ==(LOOSE EQUALITY OPERATOR, USES TYPE COERCION) VS. ===(STRICT EQUALITY OPERATOR)
// WHEN COMPARING VALUES ALWAYS USE THE === OPERATOR
// const age = '18';

// if(age === 18) console.log("You are an adult (STRICT)");
 
// if(age == 18) console.log("You are an adult (LOOSE)");

// // USING THE NUMBER CONVERTER TO CHANGE WHAT THE USER INPUTS A STRING INTO A NUMBER
// const favorite = 6;
// console.log(favorite);
// console.log(typeof favorite); //number

// if (favorite === 23) {
//   console.log('Cool 23 is an amazing number');
// } else if(favorite === 7) {
//   console.log('7 is an ok number I guess')
// } else if(favorite === 6) {
//   console.log('6 freaking rules')
// } else { 
//   console.log('Number is not 23 or 7 or 6');
// }

// // IF NUMBER IS NOT 23 LOG 'WHY NOT 23'
// if (favorite !== 23) console.log('why not 23?');

// // BOOLEAN OPERATORS 
// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// // const shouldDrive = hasDriversLicense && hasGoodVision;

// // if(hasDriversLicense && hasGoodVision) {
// //   console.log('You are old enough to drive');
// // } else {
// //   console.log('Someone else should drive')
// // }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//   console.log('You are old enough to drive');
// } else {
//   console.log('Someone else should drive')
// }

// SWITCH STATEMENTS 
const day = 'Tuesday';

switch(day) {
  case 'Monday':
    console.log("Plan meals for week");
    console.log('Go to gym');
    break;
  case 'Tuesday':
    console.log("Eat pizza");
    break;
  case 'Wednesday':
  case "Thursday":
    console.log("Go to gym");
    break;
  case "Friday":
    console.log("Play games");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("invalid day")
}
// CONVERTING THE CODE ABOVE INTO AN IF/ELSE STATEMENT

const day1 = "Wednesday";
if (day1 ==="monday") {
  console.log("Its Monday")
} else if (day1 ==="Tuesday"){
  console.log("Its Tuesday")
} else if (day1 === "Wednesday" || day1 === "Thursday"){
  console.log("Go to gym")
} else if (day1 === "Friday") {
  console.log("Play video games")
} else if (day1 === "Saturday" || day1 === "Sunday") {
  console.log("Enjoy the Weekend")
} else {
  console.log("choose a valid day")
}

// STATEMENTS AND EXPRESSIONS
if (23 > 10) {
  const str = "23 is bigger"
}
console.log(`I am ${2022 - 1987} years old`)

// CONDITIONAL OPERATORS 

const age = 23;

//add emoji = control + command + space bar
age >= 18 ? console.log('I like to get drunk 🤪'): 
console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

// TERNARY OPERATOR 
let drink2;
if(age>=18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);