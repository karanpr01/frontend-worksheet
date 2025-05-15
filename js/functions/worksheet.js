
//* 1. Write a simple function called greet that prints "Hello, World!" to the console.

function greet() {
    console.log("Hello world!");
}

// greet()


//* 2. What is the difference between a parameter and an argument in a function?

// Parameters are the value or placeholder which a function excpet to receive.
// Example
function userName(name) { // Here name is an Parameter
    console.log(`Hello ${name}, Welcome to the site`);
} 

// Argument is the actual value passed to a funtion when the function is called.
// userName("Prem") // Here "Prem" is an argument which a function is passing when it called.
// simarily
// userName("Priya") 
// userName("Akash") 
 
//* 3. What will be the output of this code?

 /* function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); */


// The above function is accepting two parameters "a" and "b" and returns "a + b" and while calling the function we are passing argument of "2" and "3" and display is in the console. So, Output will be the function is adding "a + b" means "2 + 3" is equal to 5 . 5 will be the output showing in the console. 


//* 4. How do you call (invoke) a function named showMessage?
// We simply call (invoke) a function by adding  round brackets after the name of any function "showMessage()"
function showMessage() {
    console.log("Welcome user!");
}

// showMessage()

//* 5. Rewrite the following function as an arrow function:
/* function square(x) {
  return x * x;
} */

  const square = (x) => {return x*x};

//   console.log(square(2)); //4

//* 6. What will this code print? Explain why.
 /* function test() {
  return;
  console.log("Done");
}
console.log(test()); */ 

// The above function is dispalyin undefined in console has the function is not returning any value to show in console . The "consol.log("Done")" line after return will not executed because javascript function stop when they encounter an return statement.

//* 7. Write a function expression (assigned to a variable) that multiplies two numbers and returns the result.

function multi(a,b) {
    return a * b
}

// console.log(multi(2,5)); // 10

//* 8. Write a function isEven that returns true if its argument is an even number, and false otherwise.

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));//True
console.log(isEven(5));//False

//* 9. What is the difference in how this works in a regular function vs. an arrow function?


//* 10. Write a function factorial(n) that returns the factorial of n (e.g., factorial(5) returns 120).

function factorial(n) {
  if (n < 0) {
    return undefined; 
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1 (by definition)
console.log(factorial(-3)); // Output: undefined
