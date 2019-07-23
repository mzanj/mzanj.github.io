/*Loops—
A for loop repeats until a specified condition evaluates to false. A for statement looks as follows: for ([initialExpression]; [condition]; [incrementExpression]) statement.
While—
A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows: while (condition) statement
Example:
The following while loop iterates as long as n is less than three:
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}
For-in loops—
The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows: for (variable in object)  statement

Looping five times
var i = 0;

for (i = 0; i <= 5; i++){
  console.log(i);
}
0
1
2
3
4
5

 Looping backward
var i = 0;

for (i = 5; i > 0; i--){
  console.log(i);
}
1
2
3
4
5
*/
