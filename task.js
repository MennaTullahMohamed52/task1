//Check The Number Is Even or Odd
let num = prompt("Enter The Number: ")
if (num % 2 == 0) {
    console.log(num + " is Even")
}
else {
    console.log(num + " is odd")
}


//Fizz Buzz Game
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


//Reverse String
let st = prompt("Enter String: ")
let reversed = "";
for (let i = std.length - 1; i >= 0; i--) {
    reversed += st.charAt(i)
}
console.log(st + "Reversed => " + reversed)



//Compute Circle Area and Circumference
let r = prompt("Enter The Redius: ")
let pi = prompt("Enter The Number Of pi (3.14 OR 22/7): ")
let A = pi * r ^ 2
let C = 2 * pi * r
console.log("The Area Of Circle is: " + A)
console.log("The circumference Of Circle is: " + C)



//check two given numbers and return true if one of the number is 50 or if their sum is 50
let num1 = parseInt(prompt("Enter num1: "))
let num2 = parseInt(prompt("Enter num2: "))
let sum = num1 + num2
if (num1 === 50 || num2 === 50 || sum === 50) {
    console.log("True")
}
else {
    console.log("False")
}



//check from two given integers, whether one is positive and another one is negative
let x = parseInt(prompt("Enter num1: "))
let y = parseInt(prompt("Enter num2: "))
if (x > 0 && y < 0) {
    console.log(x + " Is Positive" + ", " + y + " Is Negative")
}
else if (y > 0 && x < 0) {
    console.log(x + " Is Negative" + ", " + y + " Is Positive")
}
else {
    console.log(x + " Is Positive" + ", " + y + " Is Positive")
}



//check whether a given positive number is a multiple of 5 or a multiple of 8
let number = prompt("Enter number: ")
if (number > 0 && (number % 5 == 0 && number % 8 == 0)) {
    console.log(number + " Is Multiple Of 5 and 8")
}
else if (number > 0 && number % 8 == 0) {
    console.log(number + " Is Multiple Of 8")
}
else if (number > 0 && number % 5 == 0) {
    console.log(number + " Is Multiple Of 5")
}
else {
    console.log(number + " Is Not Multiple Of 5 Or 8")
}



//find the largest of three given integers
let a = parseInt(prompt("Enter num1: "))
let b = parseInt(prompt("Enter num2: "))
let c = parseInt(prompt("Enter num3: "))
if (a > b && a > c) {
    console.log(a + " Is The Biggest Number")
}
else if (b > a && b > c) {
    console.log(b + " Is The Biggest Number")
}
else {
    console.log(c + " Is The Biggest Number")
}



//Compute The sum of the numbers from 1 to 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sm = 0
for (let i = 0; i <= arr.length - 1; i++) {
    sm += arr[i]
}
console.log("The Sum Of The Array Is " + sm)




//display the pattern like right angle triangle using an asterisk
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}



//check whether a given number is positive or negative
let z = prompt("Enter Number: ")
if (z > 0) {
    console.log(z + " Is Positive")
}
else if (z < 0) {
    console.log(z + " Is Negative")
}
else {
    console.log(z + " Is Not Positive Or Negative")
}



//store elements in an array and print it
let array = [];
let n = prompt("Enter size");
for (let i = 0; i < n; i++) {
    array.push(prompt("Enter element " + i));
}
array.forEach((item, index) => {
    console.log(`Element - ${index} : ${item}`);
})



//print the sum of two numbers
let number1 = Number(prompt("Enter number1: "))
let number2 = Number(prompt("Enter number2: "))
let summ = number1 + number2
console.log("The Sum Of Two Numbers Is: " + summ)



//calculate the factorial of a given number
let f = Number(prompt("Enter number: "))
let m = 1
if (f === 0 || f === 1)
    m = 1;
for (var i = f; i >= 1; i--) {
    m *= i;
}
console.log("The Factorial Of " + f + " Is " + m)



//Create Simple Calculator (+ , - , * , /)
let o = Number(prompt('Enter first number: '))
let u = Number(prompt('Enter second number: '))
let operator = prompt('Enter operator (+, -, * or / ): ')
let result;
if (operator == '+') {
    result = o + u
}
else if (operator == '-') {
    result = o - u
}
else if (operator == '*') {
    result = o * u
}
else {
    result = o / u
}
console.log(o + " " + operator + " " + u + " = " + result)