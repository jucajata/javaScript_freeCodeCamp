// 01) Hello world
console.log("Hello from JavaScript");


// 02) Comment Your JavaScript Code
var number = 5; // in-line comment
/* this is a 
fd
fd
multi-line comment */
number = 9; 


// 03) Data Types and Variables
/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

var myName = "Juan" // var is used in all the program
myName = 8
let ourName = "freeCodeCamp" //only we used whithin the scope of where you declared that
const pi = 3.14 // variable that never change


// 04) Storing Values with Assigment Operator
var a;
var b = 2;
console.log(a)
a = 7;
b = a;
console.log(a)


// 05) Initializing Variables with Assigment Operator
var a = 9;


// 06) Uninitialized Variables
// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String";


// 07) Case Sensitivity in Variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Assigments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


// 08) Adding Numbers
var sum = 10 + 10;
console.log(sum)


// 09) Subtracting Numbers
var difference = 45 - 33;


// 10) Multiplying Numbers
var product = 8 * 10;


// 11) Dividing Numbers
var quotient = 66 / 33;


// 12) Incrementing Numbers
var myVar = 87;
myVar = myVar + 1;
myVar++;


// 12) Decrementing Numbers
var myVar = 11;
myVar = myVar - 1;
myVar--;


// 13) Decimal Numbers
var ourDecimal = 5.7;
var myDecimal = 0.009;


// 14) Multiply Decimals
var product = 2.0 * 2.5;
console.log(product)


// 15) Divide Decimals
var quotient = 4.4 / 2.0;


// 16) Finding a Remainder
var remainder;
remainder = 11 % 3;
console.log(remainder)


// 17) Compound Assignment with Augmented Addition
var a = 3;
var b = 17;
var c = 12;

a = a + 12;
a += 12;

b = b + 9;
b += 9;

c = c + 7;
c += 7;


// 18) Compound Assignment with Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;

a = a - 6;
a -= 6;

b = b - 15;
b -= 15;

c = c - 1;
c -= 1;


// 19) Compound Assignment with Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;

a = a * 5;
a *= 5;

b = b * 3;
b *= 3;

c = c * 10;
c *= 10;



// 20) Compound Assignment with Augmented Division
var a = 48;
var b = 108;
var c = 33;

a = a / 12;
a /= 12;

b = b / 4;
b /= 4;

c = c / 11;
c /= 11;


// 21) Declare String Variables
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Juan";
var myLastName = "Jaramillo";


// 22) Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quoutes\"";
console.log(myStr)


// 23) Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr)
var myStr = `'<a href="http://www.example.com" target="_blank">Link</a>'`;
console.log(myStr)


// 24) Escape Sequences in Strings
