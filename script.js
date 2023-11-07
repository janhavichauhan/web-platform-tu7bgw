//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

let FIRST_NAME = localStorage.setItem('firstName','Rajat');
let LAST_NAME = localStorage.setItem('lastname','Rajput');
let AGE = localStorage.setItem('age','25');
let STATE = localStorage.setItem('state','Rajasthan');
let COUNTRY = localStorage.setItem('country','India');

console.log(localStorage)
//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
console.log(localStorage.getItem('firstName'))
console.log(localStorage.getItem('lastname'))
console.log(localStorage.getItem('country'))
console.log(localStorage.getItem('state'))
console.log(localStorage.getItem('age'))



//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
let removeitem = localStorage.removeItem('state');
console.log(localStorage)

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
localStorage.clear()
console.log(localStorage)

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

let string = JSON.stringify(user)
console.log(string)
