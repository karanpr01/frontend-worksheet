//* 1. What is a string in JavaScript? Give two ways to declare a string[4].

// A string is a primitive data type used to represent text.
// There are three types to declare it
let str1 = 'Prem' //type1 using single quotes
let str2 = "Anil" //type2 using double quotes
let str3 = `Karn` //type2 using backticks (Template literals)




//* 2. Are JavaScript strings mutable or immutable? What does that mean[5][6]?

// Strings are immutable, meaning once created, their content cannot be changed—any operation that seems to modify a string returns a new string.



//* 3. How do you find the length of a string called 'message'?

let message = "Hello World!"
// console.log(message.length);



//* 4. What will this code output?

let str = "HELLO";
// console.log(str.charAt(1));

// The charAt() method tells at what index which tell is there. For example in the above varable str on 1 index is letter E . So the output will be "E".






//* 5. Write code to check if the string "JavaScript" contains the substring "Script"

let string = "Javascript"
// console.log(string.includes("script"));





//* 6. How do you convert the string "hello world" to uppercase[6]?

let hello = "  hello world  "

// To convert the string "hello world" we can use toUpperCase() method in js.
// console.log(hello.toUpperCase());



//* 7. What does the trim() method do to a string[5][6]?

// The trim method removes  whitespaces characters  from the start and end of string.
// console.log(hello.trim());




//* 8. What is the difference between slice() and substring() for strings[5][6]?

// The .slice() method extracts a section of a string and returns it as a new string. The .substring() is similar to slice() but doesn't support negative indices.
// Example:

let js = "JavaScript";

// console.log(js.slice(0, 4));     
// console.log(js.substring(0, 4));

// console.log(js.slice(-6));       
// console.log(js.substring(-6));   




//* 9. Given let fruit = "banana";, write code to find the index of the first and last occurrence of "a"

let fruit = "banana"

let firstIndex = fruit.indexOf("a")
let lastIndex = fruit.lastIndexOf("a")

// console.log(`The first index of "a" in banana is at index:${firstIndex} and last index of "a" in banana is index:${lastIndex}`);




//* 10. Write code to extract the word "Mango" from this string using slice():

let fruits = "kiwi, Mango, Orange";
let mango = fruits.slice(6,11)

// console.log(mango);





//* 11. How do you split the string "red,green,blue" into an array of colors[5][6]?

let color = "red,green,blue"
let array = color.split(",")

// console.log(array);
// console.log(typeof(array));
// console.log(typeof(color));






//* 12. Write a line of code to check if the string "apple" starts with "a" and ends with "e".

let apple = "apple"

// console.log(apple.startsWith("a"));
// console.log(apple.endsWith("e"));






//* 14. What is the result of this code?

let re = "Ha!";
// console.log(re.repeat(3));

// The above code .repeat() method . This method help repeat the string multiple times . Like in this the variable re containing a string "Ha!" will repeat 3 times will printing it.





//* 15. Write a function that returns true if a given input is a string, and false otherwise.

function checkInput(input) {
    if (typeof input === "string") {
        console.log(true);
    }else{
        console.log(false);
        
    }
}

// checkInput("Prem")
// checkInput(123)






//* 16. Given let str = " hello world ";, write code to remove only the whitespace at the start of the string

let removeWhiteSpace = " hello world "
// console.log(removeWhiteSpace.trimStart());






//* 17. How do you pad the string "5" on the left with zeros so that it becomes "005"[6]?

let pad = "5"
// console.log(pad.padStart(3, "0"));
// console.log(pad.padEnd(3, "0"));






//* 18. Given a string let s = "😊";, what will s.length return and why[6]?

let s = "😊"
// console.log(s.length);


// It shows "2" because javascript count it is a 2 pieces. Javascript stores emoji in two parts called code and units. The .length() counts those part not how many character we see. 






//* 19. Write code to convert the string "hello world" to "Hello World" (capitalize the first letter of each word).
// Hint: Use split(), map(), and join().

let text = "hello world"

let split = text.split(" ")

let map = split.map(word => word.charAt(0).toUpperCase() + word.slice(1))

let join = map.join(" ")

// console.log(split);
// console.log(map);
// console.log(join);





//* 20. Explain why the following code returns false, and how you could fix it:

// let x = "John";
// let y = new String("John");
// console.log(x === y);

// In the above code the output is coming false bacause we are using "new" keyword in "y" which creates an object . And we are using strict check (===) which compares both value and type.
// To correct and get the outpur in true we can avoid the use of "new" keyword or avoid the strict check.

// solution1

// let x = "John";
// let y = "John";
// console.log(x === y);


// solution 2

// let x = "John";
// let y = new String("John");
// console.log(x == y);