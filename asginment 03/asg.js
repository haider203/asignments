"use strict";
// Assignment for this week is (no 2 problems)
//  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// var Temp:number =22;
// var CalToFahren:number = (Temp* 9/5)+32
// console.log('temperature from Celsius to Fahrenheit', CalToFahren);
// var Temp:number =22;
// var CalToFahren:number = (Temp*9/5)-32
// console.log('temperature from Fahrenheit to Celsius ', CalToFahren);
/*through funtion
function celToFar(Temp:number) {
    return(Temp* 9/5)-32;
}
var FahrenheitValue=celToFar(13);
console.log(FahrenheitValue);*/
//*************w********************************* */
//  - Write a program that calculates the percentage.
//through function
/*function StuPer(obtainmarks:number,totalmarks:number) {
    return(obtainmarks/totalmarks*100)
}
var result=StuPer(770,1100);
console.log(result); */
/*var totalmarks:number=1100;
var obtainmarks:number=775;
var result:number=Math.floor(obtainmarks/totalmarks *100);
console.log('your marks in percentage',result);*/
//**************************************/
//  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
//       var getDays:number =45;
//       var inWeeks:number =Math.floor(getDays/7);
//       var inDays:number = getDays%7;
// console.log(`weeks are these  ''${inWeeks} here is ${inDays}''Days`);
//  - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 
//10% discount; otherwise, apply a 5% discount.
// var OldPrice:number=150;
// var discount:number;
// var NewPrice:number;
// if(OldPrice>100){
//     discount=(OldPrice*10/100);
//     console.log(discount);
//     NewPrice=OldPrice-discount;
//     console.log(NewPrice);
// }
// else{
//     discount=(OldPrice*5/100);
//     console.log(discount);
//     NewPrice=OldPrice-discount;
//     console.log(NewPrice);
// }
//  var oldPrice:number=99;
//  var discount:number;
//  var newPrice:number;
//  if (oldPrice>100) {
//     discount=(oldPrice*10/100);
//     console.log(discount);
//     newPrice=oldPrice-discount
//     console.log(newPrice);
//  } else {
//     discount=(oldPrice*5/100);
//     console.log(discount);
//     newPrice=oldPrice-discount
//     console.log(newPrice);
//  }
//  - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, 
//print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
//  var age:number=12;
//  if (age > 0 && age <=12) {
//     console.log("child");
//  } else if(age >= 13 && age <=19 )
//  {
//     console.log("teenager")
//  }
//  else{
//     console.log("adult")
//  }
//  - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes
// and so on according to the weather.
// var temperature:number = 45
//   if(temperature <= 15){
//     console.log(`The weather is cold wear warm cloths`);
//   }
//   else if(temperature >= 16 && temperature <=22){
//      console.log("weather is normal");
//   }
//   else if(temperature >=23 && temperature <=38 ){
//     console.log('The weather is Hot ');
//   }else{
//     console.log('Heat Strom stay home');
//   }
//  - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone 
//show output accordingly.
// var value:number = 3
// if(value%3 === 0  || value%5 === 0 ){
//   console.log(`${value} is divided by 3 and 5`);
// }else{
//  console.log(`${value} is Not divided by 3 and 5`);
// }
//  - Write a program that checks if the given year is leap year or not.
// var year :number = 2024
//    if(year%4 == 0 ){
//      console.log(`${year} is a Leap Year`);
//    }else{
//     console.log(`${year} is not leap year`);
//    }
//  - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements
// to print the corresponding day's name.
var userNumber = 1;
switch (userNumber) {
    case 1:
        console.log(`Its a Monday`);
        break;
    case 2:
        console.log(`Its a tuseday`);
        break;
    case 3:
        console.log(`Its a wednesday`);
        break;
    case 4:
        console.log(`Its a thursday`);
        break;
    case 5:
        console.log(`Its a friday`);
        break;
    case 6:
        console.log(`Its a saturday`);
        break;
    default:
        console.log('Its a Sunday');
        break;
}
//  - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
