//hoisting deadzone

//let ,var const allows us to define a variable in js the variable can be a function or datatype
//let ,const==>block scope
//var function scope
//undefined,null computes to false 
//null is intentionally assigned to make va variable have no value
//undefined is like a place holder for a variable defined but its value is not decleared
//var allow redecleration and can be changed later
//let doesnot all redeclaration but value can be changed later
//const doesnot allow redeclaration and value cannot be changed later and initialized at time of decleration
 
//NOTE
const a=[4,5,6,7];
//reassignment not allowed 
//a=[7,8,9];
//we create a refrence to array
//allowed cause a sotre ref to that value
//we are not changing refrence we are just updating a value in memory 
a[0]=9;
console.log(a);
a[1]=10;
a[2]=11;
a[3]=12;
console.log(a);

//similar for object as array are special type object.only differ in key as object keys are string and array index are predefined stracture from 0. 

//hoisting

//Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.





// let and const are also hoisted but cannot be accessed until their declaration is reached (temporal dead zone).


// Primitive Types: Numbers, strings, booleans, null, undefined
// Reference Types: Objects, arrays

//
//Differences Between Arrays and Objects in JavaScript
// In JavaScript, both arrays and objects are fundamental data structures, but they serve different purposes and have distinct characteristics.
// Arrays as Special Objects:
// Arrays are indeed a type of object in JavaScript. However, they are designed specifically for storing ordered collections of data. The key distinction is that arrays use numerical indexes to access their elements, while objects use string keys (or property names).
// Arrays maintain the order of elements and allow for efficient access via their index. This makes them ideal for scenarios where the sequence of data matters, such as lists or queues. Objects, on the other hand, are better suited for representing entities with named properties.
// Purpose of Arrays vs. Objects:
// Arrays: Best used for storing lists of similar items (e.g., a list of numbers or strings), where the order is significant.
// Objects: Ideal for representing complex entities with various attributes (e.g., a person with a name, age, and address).

