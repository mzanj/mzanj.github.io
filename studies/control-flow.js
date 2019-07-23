// Control flow—
// The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
// Example:
// function testNum(a) {
//   if (a > 0) {
//     return "positive";
//   } else {
//     return "NOT positive";
//   }
// }
// console.log(testNum(-5));
// // expected output: "NOT positive"

// Switch—The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.
// Example:
// var expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }
