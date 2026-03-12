const newLine =() => console.log('--'.repeat(20));
/*
1. Convert the string "123" to a number and add 7. (0.5 Grade)
• Output Example: 130
*/
{
    const x = '123';
    console.log(Number(x)+7);
    newLine();
}
/*
2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
• Input Example: 0
• Output Example: "Invalid"
*/
{
    const x = 0;
    if (x == 0) {
        console.log('Invalid');
    }
    newLine();
}
/* 
3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
• Output Example:1, 3, 5, 7, 9
*/
{
    for (let i = 0; i<=10; i++) {
        if ( i % 2 == 0 ) {
            continue;
        }else{
            console.log(i);
        }
        
    }
    newLine();
}
/*
Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
• Input Example: [1, 2, 3, 4, 5]
• Output Example: [2,4]
*/
{
    let arr = [1, 2, 3, 4, 5];
    const result = arr.filter((ele) => ele % 2 == 0);
    console.log(result);
    newLine();
}
/*
5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
• Input Example: [1, 2, 3], [4, 5, 6]
• Output Example: [1, 2, 3, 4, 5, 6]
*/
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    const result = [...arr1,...arr2]
    console.log(result);
    newLine();
}
/*
6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
• Input Example: 2
• Output Example: “Monday”
*/
{
    let dayNum = 2;
    switch (dayNum) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
        case 7:
            console.log("Saturday");
            break;
    }
    newLine();
}
/*
7. Create an array of strings and return their lengths using map method (0.5 Grade)
• Input: ["a", "ab", "abc"]
• Output Example: [1, 2, 3] 
*/
{
    const array =["a", "ab", "abc"];
    const result = array.map(ele => ele.length)
    console.log(result);
    newLine();
}
/*
8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
• Input Example: 15
• Output Example: “Divisible by both”
*/
const checkDivisiblty = function (number) {
    if (number % 3 === 0 && number % 5 === 0 ) {
        return "Divisible by both";
    } else{
        return "Not Divisible by both";
    }
}
console.log(checkDivisiblty(15));
newLine();
/*
9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
• Input Example: 5
• Output Example: 25
*/
const square = num => num**2;
console.log(square(5));
newLine();
/*
10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
• Input Example: const person = {name: 'John', age: 25}
• Output Example: 'John is 25 years old' 
*/
const person = {name: 'John', age: 25};
const formatObject = function (per){
    return `${per.name} is ${per.age} years old`};
console.log(formatObject(person));
newLine();
/* 
11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
• Input Example: 1, 2, 3, 4, 5
• Output Example: 15
*/
const multiple = function(...nums){
        return nums.reduce((result, ele)=>{return result+ele},0)}
console.log(multiple(1,2,3,4,5));
newLine();
/* 
12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
• Output Example: “Success”
*/
const checkMessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    }, 3000);
})
await checkMessage.then((message)=>{
    console.log(message);
    newLine();
})
  .catch((err)=>{
    console.log(err);
})
/*
13. Write a function to find the largest number in an array. (0.5 Grade)
• Input Example: [1, 3, 7, 2, 4]
• Output Example: 7 
*/
const getLargestNumber = function(arr){
    let result =0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>result) {
            result = arr[i];
        }
    }
    return result;
}
const nums = [1, 3, 7, 2, 4];
console.log(getLargestNumber(nums));
newLine();
/*
14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
• Input Example: name: "John", age: 30}
• Output Example: ["name", "age"]
*/
const getKeys = function(person){
    return Object.entries(person).map(([key, value]) => key);
}
const per = { name: "John", age: 30 };

console.log(getKeys(per));
newLine();
/*
15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
• Input: "The quick brown fox"
• Output: ["The", "quick", "brown", "fox"]
*/
const splitStr = function(str) {
    return str.split(" ");
}
let str = "The quick brown fox";
console.log(splitStr(str));
newLine();
/*
Part 2: Essay Questions 
1. What is the difference between forEach and for...of? When would you use each?
forEach is a method used for array by using callback function on the array elements, 
for is a loop operator i can use on any iterative type and i can use (break, continue) statments.
------------------------------------------------------
2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples
hoisting is raising the declration on a varible on the front line of the scope to excute it first with code 
EX: console.log(X) //undefined
    let x = 20;
Temporal Dead Zone (TDZ) is when declare in assign value to variavle using let/const it goes in TZ that gives me varilbe but can't access their value 
EX: console.log(X) //ERROR
    let x = 20;
---------------------------------------------------------
3. What are the main differences between == and ===?
     ==                ||    === 
non-strict operator    || strict operator
compare value only     || compare value + type
---------------------------------------------------
4. Explain how try-catch works and why it is important in async operations
try-catch can handle error by excuting the block of code in try scope and if error happens it doesn't stop the whole code only excute catch scope code 
it is important in async operations by not stopping the whole code or background operation 
------------------------------------------------------------------------
5. What’s the difference between type conversion and coercion? Provide examples of each?
type conversion : it done manually by me using method EX : Number("123"); // 123 type number
coercion : it done automatically by machine when using operators EX : console.log("5" + 5) // 10
----------------------------------------------------------
*/
