//Functions 
/*The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?    First we declare then call a function. A function is created with an expression that starts with the keyword function.
What’s the difference between a function’s parameters and arguments PASSED to a function?  Parameters are variables listed as a part of the function definition.
Arguments are values passed to the function when it is invoked.
 A function can have multiple parameters or no parameters at all. In the following 
Example: 
makeNoise does not list any parameter names, whereas power lists two:

let makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024

What’s the syntax for a NAMED function?  Function functionName (){
How do we assign a function to a variable?   A function declaration is made of function keyword, followed by an obligatory function name, a list of parameters in a pair of parenthesis (para1, ..., paramN) and a pair of curly braces {...} that delimits the body code.
A function declaration looks this way:
// function declaration
function isEven(num) {
  return num % 2 === 0;
}
isEven(24); // => true
isEven(11); // => false
Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! Closure
The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question.
The following code shows an example of this. It defines a function, wrapValue, that creates a local binding. It then returns a function that accesses and returns this local binding.
Example:
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
*/