// Default parameters in JavaScript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2)); 

console.log(multiply(5)); 

// Default parameters with destructuring
function createUser({ name = 'Anonymous', age = 18 } = {}) {
  return `Name: ${name}, Age: ${age}`;
}

console.log(createUser({ name: 'Alice', age: 30 }));
console.log(createUser({ name: 'Bob' })); 

// Default parameters with arrays
function sumArray(arr = []) {
  return arr.reduce((acc, num) => acc + num, 0);
}

console.log(sumArray([1, 2, 3]));

// Default parameters with rest parameters
function logMessages(...messages) {
  messages.forEach(msg => console.log(msg));
}

logMessages('Hello', 'World'); 
logMessages(); 

//Spread Syntax in JavaScript
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const combinedNumbers = [...numbers, ...moreNumbers];
console.log(combinedNumbers);

// Spread syntax with objects
const user = { name: 'Alice', age: 30 };
const updatedUser = { ...user, city: 'New York' };          
console.log(updatedUser);

// Destructuring assignment in JavaScript
const array = [1, 2, 3];
const [a, b] = array;
console.log(a); 
console.log(b);
console.log(array); 

//Arow functions in JavaScript
const add = (x, y) => x + y;
console.log(add(5, 3));