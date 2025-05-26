//* 1. What is an object in JavaScript? Give an example
// In javascript object is collection of data in key-value pairs. It can be string , numbers , object, function, boolean but the key should always be a sting.
// Exampl:

let user = {
    name:"Prem",
    age:21,
    isStudent: true
}





//* 2. How do you create an empty object?
// To create an empty object we can use object literal notation,Object constructor (Use the new keyword with object constructor),object.create(null).Among this the object literal notation is generally preferred for its simplicity and readability

// Example
// Object literal notation
    // const myObject = {};

// Object constructor
    // const myObject = new Object();

// Object.create(null)
//     const myObject = Object.create(null);







//* 3. Given this object, how do yo access the value "Alice"?

let user1 = {
    name: "Alice",
    age:25
}

// We can access the value "Alice" by using its key name in below format.

// console.log(user1["name"]);







//* 4. How do you add a new property city with value "Paris" to the object above?

//  We can simply add it using dot notation

user1.city = "Pairs"

// console.log(user1);








//* 5. What will this code output?

let car = { brand: "Toyota", year: 2020 };
// console.log(car["brand"]);

// The above code is accessing the key named brand from the object car . Show it show the value of brand which is "Toyota".







//* 6. How can you check if an object has a property called "age"?

// There are several ways to check if the oject has the key called "age". like "in" operator, hasOwn() method.

// Example:

// "in" operator

// console.log('age'in user1);

// hasOwn()

// console.log(Object.hasOwn(user1,'age'));









//* 7. Write code to loop over all properties of an object and print their keys and values.

for(const key in user1){
      if (user1.hasOwnProperty(key)) {
    // console.log(`${key}:${user1[key]}`);
  }
}







//* 8. What is the difference between dot notation and bracket notation for accessing object properties?
// We use dot notation when we know the exact name of the property and it's a valid identifier. We use square brackets when we want to dynamically access a property, or when the property name contains spaces, hyphens, or is not a valid variable name.






//* 9. How do you delete a property from an object? Show with code.
// To delete a property from an object, we can use the `delete` keyword followed by the object name and the key we want to delete. The `delete` keyword only removes the object's own properties, not inherited ones.

// Example:
// console.log(user1);
delete user1.city
// console.log(user1);







//* 10. Given,How do you access the second hobby?

let person = { name: "Bob", hobbies: ["reading", "sports"] };

// To access the second hobby, we can use bracket notation with the index of the array inside the hobbies property.

// console.log(person.hobbies[1]);








//* 11. How do you merge two objects into a new object (without modifying the originals)?
// To merge two objects into a new object without modifying the originals, you can use Spread operator (...). Most common and modern way

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

let merge = {...obj1,...obj2}

// console.log(merge);
// console.log(obj1);
// console.log(obj2);







//* 12. What does Object.keys(obj) return?
// It gives the keys (property names) of the object and it includes own properties (not inherited).

// for Example:
// console.log(Object.keys(user));







//* 13. Write a function that takes an object and returns the number of properties it has.

function count(object) {
    return Object.keys(object).length
}
// console.log(user);
// console.log(count(user));

// console.log(user1);
// console.log(count(user1));

// console.log(obj1);
// console.log(count(obj1));









//* 14. What will this code output? Explain.
let a = { value: 10 };
let b = a;
b.value = 20;
// console.log(a.value);

// In above code we first decalred a  variable called "a" and in it we creates an object "{value: 10}". And in second line we create on more variabe "b" and we give it reference to "a". So "a" and "b" will point to the same object.In the next line we do "d.value=20" . Since "b" and "a" point to same object so when we update the value of "b" it will also update in "a". So the output in the console will be "20".





//* 15. What is the difference between a method and a property in an object? Give examples.
// In an object, a method is an action or function that the object can perform for example: greet(), calculate().
//  while a property is a piece of data or attribute that describes the object for example: name,age, color.

const person1 = {
  name: "Prem",          // Property
  age: 21,               // Property
  greet: function() {    // Method
    console.log("Hello!");
  }
};

// console.log(person1.name); // Access property: "Prem"
// person1.greet(); // Call method: prints "Hello!"







//* 17.  Write an object calculator with methods add(a, b) and subtract(a, b) that return the sum and difference.


let calculator = {
    add:function(a,b) {
        return a + b
    },
    subteact:function (a,b) {
        return a - b
    }
}


// console.log(calculator.add(2,3));
// console.log(calculator.subteact(2,3));








//* 18. Given, What will be the value of obj after this code runs?

let obj = { x: 1, y: 2 };
for (let key in obj) {
  obj[key] = obj[key] * 2;
}
console.log(obj);

// After the code runs we see the value of "obj" is "x:2 y:4".Because we use for loop for each key of the obj  and then multiple the value of key to "2". So it will work like this "For key = "x", obj[key] is 1. We do 1 * 2 = 2, so obj.x becomes 2, For key = "y", obj[key] is 2. We do 2 * 2 = 4, so obj.y becomes 4".