// //write a ts program that print the table of 5..
// let loop:number=1;
// while(loop<=10){
// let result=loop*5;
// console.log("5*",loop,"=",result);
// loop+=1;
// }


// //Write a ts program that print the table of 9..
// let loop2:number=1;
// while(loop2<=10){
//     let result2=loop2*9;
//     console.log("9*",loop2,"=",result2);
//     loop2+=1;
// }


// //Q#1; - Create a function that takes an array, an index, and a value as parameters.
// // Inside the function, use the splice method to insert the value at the specified index 
// //in the array. Return the modified array.

//my try
//  function insertvalue(arr:number [],index:number ,value:number) {
//     arr.splice(index,value);
//     return arr
    
//  }
// let arr:number[]=[1,2,3,4,5]
// console.log(insertvalue(arr,1,9));//after 1 we update value 9






// //Q#2; - - Implement a simple shopping cart program using an array. Create functions to add
// // items, remove items, and update quantities using the splice method.
// // Print the cart's contents after each operation..

function insertvalue(arr:number [],index:number ,value:number) {
        arr.splice(index,value);
        return arr
          }
let arr2:number[]=[1,2,3,4,5];
console.log(arr2);
console.log(insertvalue(arr2, 2, 4));
console.log(arr2);
console.log(insertvalue(arr2, 0, 6));

// //Q#3; - Write a program that uses a while loop to print the first 25 integers.

// let loop3:number=1;
// while(loop3<=25){
//     console.log(loop3);
//     loop3+=1;
// }

// //Q#4; - Write a program that uses a while loop to print the first 10 even numbers.

// let loop4:number=1;
// while(loop4<=10){
//     if(loop4%2==0){
//         console.log(loop4);
//     }
//     loop4+=1;
// }

// //Q#5; - - Create a function that takes a positive integer as parameter
//  //and uses a while loop to calculate and return the factorial of that number.
//  function factorial(num:number):number{
//     let result:number=1;
//     while(num>0){
//         result*=num;
//         num-=1;
//     }
//     return result;
// }

// console.log(factorial(5));

// //Q#6; -  - Write a program having an array of numbers
//  //if the number is negative it should remove the negative number from the array.

//  let arr3:number[]=[1,2,3,4,5]; 
//  console.log(arr3);
//  console.log(insertValue(arr3, 2, 10));
//  console.log(arr3);
//  console.log(insertValue(arr3, 0, 10));

//  //Q#7; -  Create a function that takes an array of numbers as parameter.
//  // Use a while loop to calculate and return the sum of all the numbers in the array.
//  function sumArray(arr:number[]):number{
//     let result:number=0;
//     for(let i=0;i<arr.length;i++){
//         result+=arr[i];
//     }
//     return result;
// }

// console.log(sumArray(arr3));

// //Q#8; Implement a program that takes a list of temperatures in Celsius as input from the user.
// // Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the
// // converted temperatures in an array.
// //Use a while loop to perform the conversion for each temperature.

// let arr4:number[]=[1,2,3,4,5]; 
// console.log(arr4);
// console.log(insertValue(arr4, 2, 10));
// console.log(arr4);
// console.log(insertValue(arr4, 0, 10));

