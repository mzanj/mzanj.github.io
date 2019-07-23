// Variables
/* Variables hold things in memory. Variables are named identifiers that can point to values of a particular type like a Number, String, Boolean, Array, Object or another datatype. Variables can be assigned a value using the  =  operators. To create a variables we use the keyword, var followed by a name  for our variable. Variables only need to be declared once. Referencing the name of the variable will return the value it contains Make your variable names descriptive, so it's easier to figure out what your code means when you or someone else comes back to it. A variable name can't contain any spaces. A variable name can contain only letters, numbers, dollar signs, and underscores. Variable names are case sensitive Hello is not the same as hello.  There are 2 phases of using variables—declaration and assignment/initialization.*/

// 1. Declaration and assignments
//Var myName;
/*
*The variable myName is undefine because it has not been assigned/initialized yet to anything.  
*/
//console.log(myName); // prints   ==> undefined
// Assignment/initialization 
//Var name;
//Name = “sparky”;
/* To assign or re-assign a variable, we use the = operator 
Variable was assigned to a String “sparky”*/

//2 Var, Let, Const
//var a = 0;
//let b = 0;
//const c = 0;
/* var is a key word  followed by an identifier- it is, the name we want to give to our variable.
Let is a key word that allows us to declare a block of scope local variable. Optionally initialization*/

/*Hoisting-- Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function). A variable can be declared after it has been used. A variable can be used before it has been declared.
Example: 
//Example 1 - Does not hoist
var x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y
//This will not work as JavaScript only hoists declarations

//Example 2 - Hoists
var num1 = 3; //Declare and initialize num1
num2 = 4; //Initialize num2
console.log(num1 + " " + num2); //'3 4'
var num2; //Declare num2 for hoisting*/

