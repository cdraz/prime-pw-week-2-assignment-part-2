// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called name and set it equal to the string 'Dane'.
// We use an if statement to check if the value of name is the string 'Mary'. If it is, we console log 'Hi, Mary!'
//    If it's not, we console log 'How do you do?'.
// We console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called secret but do not assign an initial value to it.
// We declare a variable called code and set it equal to 123.
// We use an if statement to check if code is equal to 123, if it is, we set the variable secret equal to the string 'super',
//    and we change the value of code to be double what it was initially.
// We then use an if statement to check if code is greater than 250. If it is, we change the value of secret to the string 'duper'.
// Because the new value of code (246) is less than 250, we console log 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a variable called isStudent and set it equal to true.
// We declare a variable called age and set it equal to 34.
// We declare a variable called zip and set it equal to 55407.
// We use an if statement to check if isStudent is equal to true and if zip is greater than 80000. If both are true,
//    we console log 'You're a student on the West Coast!'.
// The following else if statement will be checked if the prior one is false. It checks if isStudent is false or if age is less than 30.
//    If either one is true, we console log 'What are your hobbies?'. If neither are true we move on to the next if statement.
// The following else if statement checks if isStudent is true. If it is, we console log 'Welcome to Prime!'. If it isn't, we move on to the last else statement.
// If none of the conditions in the prior if statements were true, we console log 'How about the weather?'.
// We console log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne should be 'blue', colorTwo should be 'red' per the above description.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
//FIX - We are only setting a new value for colorOne and not colorTwo.
  colorOne = 'purple';
//Add in: colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - we are using the wrong logical operator for the if statement. We are currently
//using the "or" operator, and should be using the "and" operator.
//Replace || with &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//FIX - there should be space between if and the first parentheses.
//FIX - the code below if saying 'no entry' if the age is greater than or equal to minAge.
// To match description above exactly, condition in parentheses should be: (age >= minAge)
if(minAge <= age) {
// Should log 'enter'
  console.log('no entry');
} else {
// Should log 'no entry' after above change to match description.
  console.log('enter');
}
*/
