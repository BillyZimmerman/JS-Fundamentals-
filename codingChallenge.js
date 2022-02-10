// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.

const markWeight = 78;
const markHeight = 1.69;
const marksBmi = markWeight / markHeight ** 2;
console.log(marksBmi);

const johnsWeight = 92;
const johnsHeight = 1.95;
const johnsBmi =  johnsWeight / johnsHeight ** 2;
console.log(johnsBmi);

const markHigherBmi = marksBmi > johnsHeight;
console.log(markHigherBmi);
// =================================================================================

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

if (johnsBmi < marksBmi) {
  console.log(`Marks BMI ${marksBmi} is higher than Johns BMI ${johnsBmi}`)
} else {
  console.log(`Johns BMI ${johnsBmi} is higher than Marks BMI ${marksBmi}`)
}
// ============================================================================================
//  Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team,using the test data below
// 2. Compare the team's  averages cores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Include a requirement for a minimum score of 100. With this rule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphinsScore = ((96 + 108 + 89) / 3);
// const koalasScore = ((88+ 91+ 110) / 3);
// console.log(dolphinsScore, koalasScore);

// if (dolphinsScore > koalasScore) {
//   console.log("dolphins win");
// } else if (koalasScore > dolphinsScore) {
//   console.log("koalas win");
// } else if (dolphinsScore===koalasScore) {
//   console.log("there is a tie, no one wins")
// }

// BONUS 1
const dolphinsScore = ((97 + 112 + 81) / 3);
const koalasScore = ((109+ 95+ 86) / 3);
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore >=100) {
  console.log("dolphins win");
} else if (koalasScore > dolphinsScore && koalasScore >=100) {
  console.log("koalas win");
} else if (dolphinsScore===koalasScore && dolphinsScore >=100 && koalasScore >=100) {
  console.log("Both teams win, its a tie")
} else {
  console.log("No one wins")
}

// ============================================================================================

//  Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip,depending on the bill value.Create a variable called 'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value,the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300😉

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .2

console.log(`The bill was $${bill}, the tip was $${tip} and the total was $${bill + tip}`);

// ============================================================================================



// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Create a function 'print Forecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]
// GOOD LUCK 😀
//     The Complete JavaScript Course 13

// JavaScript in the Browser: DOM and Events
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler 2. In the handler function,restore initial values of the'score'and
// 'secretNumber' variables
// 3. Restoretheinitialconditionsofthemessage,number,scoreandguessinput
// fields
// 4. Alsorestoretheoriginalbackgroundcolor(#222)andnumberwidth(15rem)
// GOOD LUCK 😀
//     The Complete JavaScript Course 14

// Data Structures, Modern Operators and Strings
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
// 2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
// 4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
// 6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// GOOD LUCK 😀