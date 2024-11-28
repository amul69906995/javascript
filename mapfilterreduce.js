//map
//Description: The map() method creates a new array by applying a provided function to each element of the original array.
// Return Value: A new array containing the results of the callback function.
// Example:
// javascript
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2); // [2, 4, 6]


//filter
// Description: The filter() method creates a new array with all elements that pass a test implemented by the provided function.
// Return Value: A new array containing only the elements that meet the condition specified in the callback function.
// Example:
// javascript
// const numbers = [1, 2, 3, 4];
// const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4] 


//reduce 
// Description: The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// Return Value: A single value that results from reducing the array.
// Example:
// javascript
// const numbers = [1, 2, 3];
// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 6



//find on array and return refrence to value in array
// Description: The find() method returns the value of the first element in the array that satisfies the provided testing function.
// Return Value: The first matching element or undefined if no match is found.
// Example:
// javascript
// const numbers = [1, 2, 3];
// const found = numbers.find(num => num > 1); // 2



//forEach is same as map but it does not return new array instead it modify old array
// Description: The forEach() method executes a provided function once for each array element.
// Return Value: This method does not return a new array; instead, it modifies the original array or performs side effects.
// Example:
// javascript
// const numbers = [1, 2, 3];
// numbers.forEach((num, index) => {
//     numbers[index] = num * 2; // Modifies original array
// });
// console.log(numbers); // [2, 4, 6]



//indexOf 
//Returns -1 if not found.
//Returns index of first matching element if found.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple"); // Returns 2
console.log(index); // Outputs: 2
