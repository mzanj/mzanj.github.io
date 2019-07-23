// Datatype- 
// Numbers--Numbers is a simple datatype values of the number type are numeric values, the value cannot be changed they are immutable . In a JavaScript program, they are written as follows: 
// //Example: 
// //15 
// String-- Strings are used to represent text. They are written by enclosing their content in quotes.
// //Example: `Hello`, "Bye"
// You can use single quotes or double quotes, to mark strings, as long as the quotes at the start and the end of the string match. Almost anything can be put between quotes, and JavaScript will make a
// string value out of it.
// Boolean--  . Boolean is a primitive data type in JavaScript. Boolean can have only two values, true or false. It is useful in controlling program flow using conditional statements like if..else, switch, while, do..while. 
// Example:
// Array--An Array is a complex datatype that lets you store multiple values in a single variable. An array is used to store a collection of data. The first index of an array is zero, not one. An array is written as a list of values between square brackets [ ], separated by commas.
// [ ] // Array literal
// Arrays can contain references to ant other data type like: String, Numbers, Booleans, other Arrays, and Object and even functions EX. myArray =[1, ‘a’, true, [ ], { }].

// Example: 
// var listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[2]);
// // → 5
// console.log(listOfNumbers[0]);
// // → 2
// console.log(listOfNumbers[2 - 1]);
// // → 3
// Object—
// An object is complex datatype that is used to store data. 
// { }// object literal
// Object is a collection of data store in curly braces{} by key value pairs. Objects can contain references to any other datatype includes: String, Numbers, Booleans, other Arrays, and Object and even functions
// Example: var myObject = {key1 : ‘a’, key2: ‘b’}.

// Functions—Functions are reusable block of code that accept inputs, and returns a new data value. Functions optionally take parameters/arguments. Parameters are just placeholders for arguments that are later “passed” or given to the function at call time. The return statement will give value to a function call (pull value to parent scope). Return statement can only be used in a function body.
// Syntax 
// Function name(parameter){
// Function body
// Return statement
// }
// Undefined-- Undefined most typically means a variable has been declared, but not defined. The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types. It basically tells us that something isn’t defined.
// Example: let a;
// Console.log(a);
// //undefined

// Null
// Null is an empty or non-existent value. Null represents a reference that points, generally intentionally, to a nonexistent or invalid object or address . Even though it points to something non existing, it’s a global object.
// Let b =null;
// Console.log(b);   //null

// NaN
// The global NaN property is a value representing Not-A-Number. JavaScript returns this value when number we’re supposed to get isn’t a number. 
// Infinity and Infinity
// The global Infinity property is a numeric value representing infinity. Infinity is a property of the global object, or in other words, a variable in global scope. The initial value of Infinity is Number.POSITIVE_INFINITY. The value Infinity (positive infinity) is greater than any other number. Mathematically, this value behaves the same as infinity; for example, any positive number multiplied by Infinity equals Infinity, and any number divided by Infinity equals 0.
// var maxNumber = Math.pow(10, 1000); // max positive number

// if (maxNumber === Infinity) {
//   console.log("Let's call it Infinity!");
//   // expected output: "Let's call it Infinity!"
// }

// console.log(1 / maxNumber);
// // expected output: 0

// console.log(Infinity          ); // Infinity 
// console.log(Infinity + 1      ); // Infinity 

// Primitive/simple and complex datatype
// The difference between primitive/simple and complex data types in JavaScript is that the complex data types (array and object) can store other kinds of data - they can store both complex and primitive data types, as you can have nested arrays and objects, but these can both contain all primitive data types as well. 

// BY COPY  Primitive values are passed to a function the equals operator plays a huge role in how value and reference work. When creating a variable the equals operator will notice that you are assigning that variable a primitive value (or complex datatype) and act accordingly. BY REFERENCE   complex values 
// In JavaScript 3 datatypes that are passed by reference are: Array, Function, and Object. These are all technically Objects.
// Example:
//   let a = 5 
// let b = a

// console.log(a) // => 5
// console.log(b) // => 5

