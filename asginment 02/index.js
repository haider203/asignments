"use strict";
// Exercise 1:  Write a program that calculates the area of a rectangle.
// var width:number=30;
// var lenght:number=45;
// var areaRevtanger:number= width*lenght
// console.log(`here is area of ${areaRevtanger}`);
// Exercise 2: Write a program that takes input and calculates the volume of a cube.
// function volumeOfCube(lenght:number,width:number,height:number) {
//     var result =lenght*width*height
//     return result;
// }
// console.log(volumeOfCube(23,10,15));
// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
// var numberCheck:number= 12
// if(numberCheck>1){
//   console.log(`${numberCheck} is a positive Number` );
// }
// else if(numberCheck < 0){
//   console.log(`${numberCheck} is a Negative Number` );
// }
// else{
//   console.log(`${numberCheck} this number is equal to Zero`);
// }
// Exercise 4:   Write a program that checks if a given number is even or odd.
var num1 = 30;
if (num1 % 2 == 0) {
    console.log(`${num1} is a Even Number`);
}
else {
    console.log(`${num1} is a Odd Number`);
}
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
var age = 25;
if (age > 18) {
    console.log('You are Eligible');
}
else {
    console.log('You are not Eligible');
}
// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
var calc = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
console.log(calc);
