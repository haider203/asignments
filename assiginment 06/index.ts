
// Write a program that uses filter to remove all negative numbers from an array of numbers


// let removeNegNumber:number []=[-1,-2,3,4,-5,-6,7,8,-9,-10,11,12];
// let positiveNUmberArr:number[] = removeNegNumber.filter((data)=>{
//     if(data>0)
//     {
//         return data;
//     }
// });
// console.log(`original array`,removeNegNumber);

// console.log(`Array of Positive Number`,positiveNUmberArr);


 // Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number
// is multiplied by 2.

// let orgArray:number []=[1,2,3,4,5];
// let multipliedArray =orgArray.map((data) => data *2)
// console.log(multipliedArray);






// // Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to
// //  create a new array containing only the fruits with more than 5 characters.

// let fruitsName:string []=["apple", "banana", "cherry", "date", "grape"];
// let findMoreThenFive:string[]=fruitsName.filter(function(data) {
//     if(data.length > 5)
//     {
//         return true;
//     }
// })

// console.log(`here is all  furits name ${fruitsName} `,findMoreThenFive,`more then five charchter`);




// // Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to
// // create a new array containing the squares of even numbers.

// let evenArray:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let squareOfEvenNumber:number[]=evenArray.map(function(value)
// {
//     if (value%2 ==0) {

//         return value*2;
//     } else {
//         return value;
//     }
// })


// console.log(`her is our result`,squareOfEvenNumber);


 // Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array
// where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
// let TempCelsius:number[]=[0, 10, 20, 30, 40];
// const farheinheit:number[]=TempCelsius.map(function(temp)
// {
// return (temp * 9/5) + 32;
// }
// );
// console.log(`Farheinheit Temptature is= ${farheinheit}`);


 // Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new
 // array containing the doubled values of odd numbers.

//  let oddValue:number[]=[3, 6, 9, 12, 15, 18];
//  let oddValueDouble:number[]=oddValue.map(function(Doubled){
//     if (Doubled%2 !==0) {

//         return Doubled*2;
    
//     }
//     else{
//         return Doubled;
//     }
//  });
// console.log(oddValueDouble);



 // Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each
 // name with an exclamation mark at the end, e.g., "Alice!"

// let namedArray:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
// namedArray.forEach(function(exc){
//     console.log(exc+"!");
    
// })
// console.log(namedArray);



 