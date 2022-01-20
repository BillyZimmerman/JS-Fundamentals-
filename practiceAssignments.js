let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// DECLARING A VARIABLE OF firstName WITH A VALUE OF billy
let firstName = "billy";
console.log(firstName);

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console
let country = "USA";
let continent = "North America";
let population = 329.5;

// I live in the USA of North America The population is 329.5 million
console.log("I live in the "+(country)+" of "+(continent)+ ", The population is "+(population));

// USE CONST AS GOOD PRACTICE WHEN YOU KNOW THE VALUE WILL NEVER CHANGE, OTHERWISE USE LET

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = false;
let language = " ";

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens
language = "English";

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);