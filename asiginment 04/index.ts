// //write a ts program that print the table of 5..

//  let loop:number=1;
//  while (loop<=10) {
//   let result:number=loop*5;
   
//   console.log(`5*${loop} =   .  .  ${result}`);
//   loop+=1 ;
//  }



// //Write a ts program that print the table of 9..
// let loop2:number=1;
// while(loop2<=10){
//     let result2=loop2*9;
//     console.log("9*",loop2,"=",result2);
//     loop2+=1;
// }


//Q#1; - Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified index 
//in the array. Return the modified array.


//  function insertvalue(arr:number [],index:number ,value:number) {
//     arr.splice(index,0,value);
//     return arr
    
//  }
// let arr:number[]=[1,2,3,4,5]
// console.log(insertvalue(arr,1,5));//after 1 we update value 5




//Q#2; - - Implement a simple shopping cart program using an array. Create functions to add
// items, remove items, and update quantities using the splice method.
// Print the cart's contents after each operation..

// let cart: string[] = ["Pasta", "Rice", "Soups", "Cheese", "Egg"];

//     cart.splice(1,0,"biryani"); // Add item
//     console.log(cart);
//     cart.splice(2,3); // remove
//     console.log(cart);
//     cart.splice(4,0,"muton"); // update
//     console.log(cart);



//Q#3; - Write a program that uses a while loop to print the first 25 integers.

// let loop3:number=1;
// while(loop3<=25){
//     console.log(loop3);
//     loop3+=1;
// }

// //Q#4; - Write a program that uses a while loop to print the first 10 even numbers.

// let loop:number=1;
// while(loop<=10){
//     if(loop%2==0){
//         console.log(loop);
//     }
//     loop+=1;
// }

//Q#5; - - Create a function that takes a positive integer as parameter
//and uses a while loop to calculate and return the factorial of that number.


// function factorial(num:number):number {
//    let result:number=1;
//    while (num>0) {
//     result*=num;
//     num-=1;
//    }
//   return result;
// }
//console.log(factorial(3));

//Q#6;- Write a program having an array of numbers
//if the number is negative it should remove the negative number from the array.

//  let arr3:number[]=[1,2,3,4,5]; 
//  console.log(arr3);
//  console.log(insertValue(arr3, 2, 10));
//  console.log(arr3);
//  console.log(insertValue(arr3, 0, 10));



//Q#7; -  Create a function that takes an array of numbers as parameter.
// Use a while loop to calculate and return the sum of all the numbers in the array.
// function calcSum(arr: number[]): number {
//   let sum = 0;
//   let i = 0;
//   while (i < arr.length) {
//     sum += arr[i];
//     i++;
//   }

//   return sum;
// }
// const numbersList:number[] = [1, 2, 3, 4, 5];
// const sum = calcSum(numbersList);
// console.log(`Sum of numbersList: ${sum}`);


//Q#8; Implement a program that takes a list of temperatures in Celsius as input from the user.
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the
// converted temperatures in an array.
//Use a while loop to perform the conversion for each temperature.

// let tempInCel:number[] = [23, 45, 71];
// let tempInFar:number[] = [];

// let index:number = 0;
// while (i < tempInCel.length){
//     tempInFar[index3] = (tempInCel[index3] * 9/5) + 32 ;
//     i++;
// }
// console.log(tempInFar);

