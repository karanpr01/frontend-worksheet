//* 1. Which method adds one or more elements to the end of an array?
// Array.push() method is used to push one or more elements at the end  of a array.
// Example:
let array1 = [1,2];
// console.log(array1);
array1.push(3,4)
// console.log(array1);





//* 2. What does the pop() method do to an array?
// array.pop() method removes the last element form an array and return it.

let array2 = array1.pop()
// console.log(array1);
// console.log(array2);





//* 3. Write code to remove the first element from this array:

let nums = [10, 20, 30];

// To remove the first element from we us array.shift() method . It's remove the first element from an array and return it.

// console.log(nums);

let num1 = nums.shift()

// console.log(num1);






//* 4. How do you add "apple" to the beginning of this array?

let fruits = ["banana", "cherry"];

// Like array.shift() method is used to remove the first element from an array . We have array.unshift() method which is used to push the element in an array at the beginning

fruits.unshift("apple")

// console.log(fruits);






//* 5. What will be the result of this code?

let arr = [1, 2, 3];
arr.reverse();

// The array.reverse() method arrange the items inside the array in reverse order. So the output will {3,2,1}.

// console.log(arr);





//* 6. Which method returns a shallow copy of a portion of an array, without modifying the original?

// The array.slice method  returns a shallow copy of a portion of an array, without modifying the original array. It accepts two optional arguments: the start index and the end index (exclusive) of the section to extract. The end index is  not included in the result
// Example:

// console.log(array1);

let newarry = array1.slice(1,3)

// console.log(newarry);
// console.log(array1);





//* 7. How do you check if the number 5 exists in this array?

let arr1 = [1, 3, 5, 7];

// To check if the number 5 exist in the array we can use array.includes(value) method to find.It return the a boolean value (True or False).

// console.log(arr1.includes(5));





//* 8. Write code to combine these two arrays into a new array:

let a = [1, 2];
let b = [3, 4];

// To combine to array into one new array we can use array.concat().

let result = a.concat(b)

// console.log(a);
// console.log(b);
// console.log(result);






//* 9. What does the following code output?

let arr2 = [1, 2, 3, 4];
arr2.splice(1, 2);
// console.log(arr2);  

// The above code uses array.splice() method . It is used to remove the element from the array . The line arr2.splice(1,2) is deleting value from index 1 till 2 count. 







//* 10. How would you replace the value 20 with 99 in this array using splice?

let arr3 = [10, 20, 30];

// To replace 20 with 99 using splice method. we can simpliy pass three argument to it like at from which index how many many element it has to remove and what to insert in it place.

// arr3.splice(1,2,99,100) // output[10,99,100]
arr3.splice(1,1,99)
// console.log(arr3);






//* 11. What does this code print and why?

let arr4 = [1, 2, 3 ];
// In the below code we are printing the arr4 by using slice method in it two show the index for 1 to 3. So the output will be [2,3]. 

// console.log(arr4.slice(1, 3));

// As the slice method returns a shallow copy of a portion of an array, without modifying the original array. So the below code will print the as it is.

// console.log(arr4);




//* 12. Write code to join all elements of this array with a dash (-):

let arr5 = ['a', 'b', 'c'];

// To join all the elements of this array we can use array.join() method.

// console.log(arr5.join('-'));








//* 13. How do you find the index of "cat" in this array?

let pets = ["dog", "cat", "bird"];

// To find the index of  'cat' we can use indexof(value) method .

// console.log(pets.indexOf("cat"));






//* 14. What does the following code print?

let array3 = [2, 4, 6];
// console.log(array3.every(n => n % 2 === 0));

// The above code use array.every() methods it returns true if every element in an array have pass the test . In this case it check for even numbers in an array . So the numbers in array3 [2,4,6] is all even numbers so it returns true.If any one number didn't pass the test it will return false.







//* 15. Write code to double every number in this array using map:

let nums2 = [1, 2, 3];
let double = nums2.map(n => n*2)
// console.log(double);





//* 16. How would you create a new array with only the odd numbers from this array?

let arrs = [1, 2, 3, 4, 5];

// To get new array with odd number we can use filter() method to get a new array with oddnumbers.

let oddnums = arrs.filter(n => n % 2 !== 0)
// console.log(oddnums);





//* 17. What does this code print?

let arry = [1, 2, 3];
let sum = arry.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// The above code use reduce() method it sum all the number and store it in the variable named 'sum'. It will work like this  1+2=3 and then 3+3=6.So the output will be '6'.






//* 18. Write code to find the first number greater than 10 in this array:

let arra = [2, 7, 15, 3];

// console.log(arra.find(n => n > 10));




//* 19. How do you check if at least one number in the array is negative?

let ar = [4, -2, 7];

// console.log(ar.some(n => n < 0));





//* 20. Write code to remove the second and third elements from this array and insert "a" and "b" in their place:

let ar2 = [0, 1, 2, 3, 4];

ar2.splice(2,2,"a","b");

// console.log(ar2);

