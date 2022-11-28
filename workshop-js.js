/*---------------------------- Logging output & Console ----------------------------*/
// console.log("hello world");
// console.error('This is an error');
// console.warn('This is a warning');
// alert('Hello World');
// prompt('hello world');
// console.log(prompt("age"))

/*---------------------------- Declaring Variables ----------------------------*/
// var firstname = "ahmed";
// var age = 20;
// firstname = "omar";
// age = "30";
// console.log(age);

/*---------------------------- Data Types ----------------------------*/
// // ************ PRIMITIVE TYPES
// var name = 'Adam'; //String
// var age1 = '37'; //String
// var age2 = 37; //Number
// var rating = 3.5; //Number
// var isPerson = true; //Boolean
// var x = null; //Null
// var z; //undefined;
// console.log("The variable 'age2' has the value " + age2 + " & the type of " + typeof age2);

// // ************ COMPLEX TYPES
// // ************ ARRAYS - Store multiple values in a variable
var numbers = [1, 2, 3, 4, 5];
// var fruits = ['apples', 'oranges', 'pears', 'grapes'];
// var hobbies = ["sleep", 33, true];

// console.log(numbers);
// console.log(fruits);
// console.log(hobbies);

// // ************ OBJECTS
// var person = {
// name: "Eve",
// age: 5000,
// isPerson: true,
// hobbies: ["eating", "sleeping"]
// };

// console.log(person);

// // ************ FUNCTIONS (as a type)
// function addition(a, b){
//     return a+b
// }

// function greet(){
//     return 'Hello World'
// }

// // Check type
// console.log(typeof addition);

// // Call function
// console.log(addition(5, 2));
// console.log(greet());

/*---------------------------- String Concatenation ----------------------------*/
// var name = "Ahmed"
// var age = 21

// console.log('My name is ' + name + ' and I am ' + age);

/*---------------------------- String Methods & Properties ----------------------------*/
// var s = "Hello World";
// var val;
// console.log("String:", s);

// // Get length
// val = s.length;
// console.log("s.length:", val)

// // String Index
// console.log("s[0]:", s[0]);

// // Change case
// val = s.toUpperCase();
// console.log("toUpperCase:", val);

// val = s.toLowerCase();
// console.log("toLowerCase:", val);

// // Get sub string
// val = s.substring(0, 5);
// console.log("substring(0, 5):", val);

// // Split into array
// val = s.split(" ");
// console.log("split(''):", val);

// val = val.join(".");
// console.log("join('.'):", val);

/*---------------------------- Array Methods & Properties ----------------------------*/
// var colors = ["black", "white", "red", "blue"];
// console.log(colors);

// // Get length
// console.log("colors.length:", colors.length);

// // Get one value (!: Arrays start at 0)
// console.log("colors[3]:", colors[3]);

// // Add value using push()
// colors.push("yellow");
// console.log("push('yellow'):", colors);

// // Add to beginning
// colors.unshift("purple");
// console.log("unshift('purple'):", colors);

// // Remove last value
// colors.pop();
// console.log("pop():", colors);

// // Remove first value
// colors.shift();
// console.log("shift():", colors);

// // Change a value
// colors[1] = "green";
// console.log("new colors :", colors);

// // Check if array
// console.log("typeof:", typeof colors);
// console.log("Array.isArray:", Array.isArray(colors));

// // Get index
// console.log("indexOf('red'):", colors.indexOf("red"));

/*---------------------------- Arithmetic Operators ----------------------------*/
// + , - , * , / , % , ++ , -- , **

// console.log("13 + 2 :", 13 + 2);
// console.log("13 + 2 :", "13" + 2);
// console.log("13 - 2 :", 13 - 2);
// console.log("'13' - 2 :", "13" - 2);
// console.log("'3' * '2' :", 3 * 2);
// console.log("'3' * '2' :", "3" * "2");
// console.log("3 * 'TEXT' :", 3 * "TEXT");
// console.log("'10' / '2' :", "10" / "2");
// console.log("10 % 2 :", 10 % 2);
// console.log("10 % 3 :", 10 % 3);
// console.log("'3' ** '2' :", "3" ** "2");

// var i = 0;
// console.log("i :", i);
// // Prefix increment (++i) increments, and returns the new, incremented value;
// console.log("Prefix increment (++i) :", ++i);
// console.log("i :", i);

// var j = 0;
// console.log("j :", j);
// // Postfix increment (j++) increments, but returns the old value (i.e. the value before the increment).
// console.log("Postfix increment (j++) :", j++);
// console.log("j :", j);

/*---------------------------- Comparison Operators ----------------------------*/
// console.log("5 == 5 :", 5 == 5);
// console.log("'5' == 5 :", '5' == 5);
// console.log("5 != 10 :", 5 != 10);
// console.log("'5' != 10 :", '5' != 10);
// console.log("5 === 5 :", 5 === 5);
// console.log("'5' === 5 :", '5' === 5);
// console.log("5 !== 10 :", 5 !== 10);
// console.log("'5' !== 10 ;", '5' !== 10);
// console.log("5 !== 5 :", 5 !== 5);
// console.log("5 <= 10 :", 5 <= 10);
// console.log("10 < 5 :", 10 < 5);
// console.log("5 >= 5 :", 5 >= 5);
// console.log("10 > 5 :", 10 > 5);

/*---------------------------- Object Literals ----------------------------*/
// var person = {
//   // an object is a collection of key-value pairs
//   firstName: "Adam",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "66 Main st",
//     city: "wtvr",
//     state: "over there",
//   },
// };
// console.log("person :", person);

// // Get single value (obj.key)
// console.log("person.firstName :", person.firstName);
// console.log("person.address.street :", person.address.street);

// // Add property
// person.email = "adam@gmail.com";
// person.hobbies.push("singing");
// console.log("New person :", person);

// // Update property
// person.firstName = "Ahmed";
// console.log("Updated person :", person);

// // Delete property
// delete person.firstName;
// console.log("Deleted firstname :", person);

// // ************ /!\ Array of objects
// var users = [
// {
// name: 'person 1',
// age: 23,
// email: "p1@gmail.com",
// },
// {
// name: 'person 2',
// age: 31,
// email: "p2@gmail.com",
// },
// {
// name: 'person 3',
// age: 15,
// email: "p3@gmail.com",
// }
// ];
// console.log("console.log :", users)
// console.table(users)

/*---------------------------- Truthy & Falsy ----------------------------*/
// console.log(
//   "There are only six falsy values in JavaScript:\nfalse, undefined, null, 0, '' empty string, NaN"
// );
// var test = null;
// console.log("test :", test);
// console.log("Boolean(test) :", Boolean(test))

/*---------------------------- Logical Operators ----------------------------*/
// ********** X && Y
// Returns first value if falsy
// console.log("0 && 5 :", 0 && 5 )
// console.log("5 > 0 && 5 < 10 :", 5 > 0 && 5 < 10) // true && true = Truthy returns second value
// console.log("5 > 10 && 5 < 10 :", 5 > 10 && 5 < 10) // false && true = Falsy returns first value

// ********** X || Y
// Returns first value if truthy
// console.log("0 || 5 :", 0 || 5 )
// console.log("5 > 0 || 5 <= 10 :", 5 > 0 || 5 <= 10) // true || true = Truthy returns first value
// console.log("5 > 10 || 5 != 10 :", 5 > 10 || 5 != 10) // false || true = Falsy returns second value

/*---------------------------- Loops ----------------------------*/
// ********************** For
// for (var i = 1; i <= 10; i++) {
//   console.log("For Loop Number: " + i);
// }

// ********************** Loop Through Arrays
// Array of objects
// var numbers = [22, 55, 66];
// for (var i = 0; i < numbers.length; i++) {
//   console.log("numbers["+i+"]:", numbers[i]);
// }

// ********************** For...in Loop
// var numbers = [22, 55, 66];
// for (var i in numbers) {
//   console.log("For...in Loop numbers["+i+"]:", numbers[i]);
// }

// ********************** For...of Loop
// var numbers = [22, 55, 66];
// for (var value of numbers) {
//   console.log("For...of Loop value:", value);
// }

// ********************** While
// var numbers = [10, 20, 30];
// var sum = 0;
// var i = 0;
// while ( i < numbers.length ) {  // change condition to false to check
//     sum += numbers[i]; // sum = sum + numbers[i]
//     i++; //i += 1 // i = i + 1
// }
// console.log("While Loop sum:", sum)

// ********************** Do While
// var numbers = [10, 20, 30];
// var sum = 0;
// var i = 0;
// do {
//   sum += numbers[i];
//   i++;
// } while (i > numbers.length);   // change condition to false to check
// console.log("Do While Loop sum:", sum)

/*---------------------------- Conditionals ----------------------------*/
// **** Simple If/Else Statement
// var x = 10;
// if (x === 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else if (x < 10) {
//   console.log("x is less than 10");
// } else {
//   console.log("x is not a number");
// }

// // ***** Switch (/!\break)
// var color = "red";
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break; // remove break and check result
//   default:
//     console.log("color is neither red nor blue");
// }

// function testColor(color) {
//   switch (color) {
//     case "red":
//       return "color is red";
//     case "blue":
//       return "color is blue";
//     default:
//       return "color is neither red nor blue";
//   }
// }

// console.log(testColor("blue"));
