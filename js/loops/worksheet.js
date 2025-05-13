/*
//* 1. Write a for loop that prints the numbers from 1 to 5 (inclusive).

for (let i = 1; i <= 5; i++){
//    console.log(i);
}

//* 2. What will be the output of this code?

let i = 3;
while (i > 0) {
//   console.log(i);  // (expeted output= 3,2,1)
  i--;
} 

//* 3. Fill in the blanks to complete this do...while loop so it prints 0 1 2.

let n = 0;
do {
//   console.log(n);
  n++;
} while (n<=2);


//* 4.
//  True or False:
// A while loop will always execute its body at least once.
// Explain your answer.
// False , A While loop does not execute its body unless the condition is true.
// A Do while loop will execute its body at least once.

// example

// while loop
let num = 6

while (num <= 5) {
    // console.log(num); 
    num++
}


// do while loop
do {
    // console.log(`${num}:prints alteast once`);
    num++
    
} while (num <= 5);


//* 5. Rewrite this for loop as a while loop:

// for (let i = 10; i > 5; i--) {
//     console.log(i);
//   }

let i = 10
while (i>5) {
    // console.log(i);
    i--;
}


//* 6. What is the output of the following code? Explain why.

let x = 5;
do {
  console.log(x);
  x++;
} while (x < 5);  //output:5

//  The output will be 5 because the loop is do while loop and condition which is x<5 is false so it will just print the value of x instead of going into the loop because do while loop execute its body aleast once



//* 7. Write a for loop that prints all even numbers from 2 to 10 (inclusive).

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i); 
    }
}
    

//* 8. Write a while loop that sums all numbers from 1 to 100 and prints the result.

let num = 1;
let sum = 0;

while (num <= 100) {
    sum += num;
    num++
}

console.log(sum);


//* 9. What is the difference between a while loop and a do...while loop? Give an example where this difference is visible.

// The difference between while and do while loop is while loop body does not execute unless the condition is true and do while loop body execute atleast once whether the condition is true or false 

// Example

let num = 6;

// While loop
while (num <= 5) {
    console.log(num);
    num++  
}

console.log(`The value of num is ${num} so the While loop body does not run`);

// Do while

do {
    console.log(num);
    
} while (num <= 5);

console.log(`The value of num is ${num} but the do while loop body runs atleast once`);

*/

//* 10 Write a for loop that prints the numbers from 10 down to 1, but stops early if the number is divisible by 4 (use break).

for (let i = 10; i >= 1; i--) {
    if (i % 4 === 0) {
        break;
    }
    console.log(i);  
}