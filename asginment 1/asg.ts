
// 1) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

//  var userName:string = 'Muhammad Ahmed'
//  console.log(` “Hello ${userName}, would you like to learn some typeScript today?”
//  `)

// 2) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//  var getName:string = 'haider ali' 
//  console.log(getName.toLowerCase())
//  console.log(getName.toUpperCase())
//  console.log(getName.charAt(0).toUpperCase()+getName.slice(1));




 
// 3) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks


// var author:string = 'haider ali';
// var quote:string = 'Honesty is the Best Policys'
// console.log(`${author} once said: "${quote}"`)

// 7) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// var additionResult:number = 5 + 3
// console.log(additionResult);
// var subtractionResult:number = 12 - 4
// console.log(subtractionResult);
// var multiplicationResult:number = 4 * 2 
// console.log(multiplicationResult);
// var divisionResult:number = 32/4
// console.log(divisionResult);


// 8 ) Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// var favoriteNumber:number =  1154
// console.log(`Your Favourite number is ${favoriteNumber}`)

// 9 ) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

//  var names:string[]= ['Ahmed', 'Anas', 'Usman', 'Ali'] 
//  console.log(names[0]);
//  console.log(names[1]);
//  console.log(names[2]);
//  console.log(names[3]);

//     console.log(names);
    
  
// 10 ) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


// var persName:string[] = ['subhan', 'haider', 'rehman', 'Anes']
// for (let i = 0; i < persName.length; i++) {
//    const element = persName[i];
//    console.log(`The ${i} person is ${element}`);
   
//    }



// 11) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that 
//stores several examples. Use your list to print a series of statements about these items, such as 
//“I would like to own a Honda motorcycle.”


 /*var companies:string[] = ['Honda', 'od', 'Toyota', 'rolls royce', 'BMW']
 for (let i = 0; i < companies.length; i++) {
     const element = companies[i];
     console.log(`I love ${element} Cars and Bikes`);
 }

*/
// let companies:string[] = ['Honda', 'od', 'Toyota', 'rolls royce', 'BMW'];
// for (let i = 0; i < companies.length; i++) {
//    const element = companies[i];   
//    console.log(`i love to buy ${element} cars and Bikes`);
   
// }




// 12 ) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite to dinner.Then use your list to print a message to each person,
// inviting them to dinner.

// var guestList:string[] = ['Ali', 'haider', 'father']

// for (let i = 0; i < guestList.length; i++) {
//     const element = guestList[i];

//     console.log(`Dear ${element} You are invited to a dinner at my place. please  join us.`)
    
// }


// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of
// invitations. You’ll have to think of someone else to invite.

// var guestList:string[] = ['Ali', 'haider', 'Father']

// for (let i = 0; i < guestList.length; i++) {
//     var newList:string[] = ['Zain', 'Ahmed Raza', 'Abu Bakar']
// //    var addEndOfArray:string[] = 
//    guestList.push(newList)
//     const element = guestList[i];
//     console.log(`Dear ${element} You are invited to a dinner at my place. please join us.`)
    
// }


 //Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
 //and you have space for only two guests.


var guestList:string[] = ['Ali', 'haider', 'yasir', 'Raza'];
var updated=  guestList.splice(-2)
   console.log(updated);
for (var index = 0; index < guestList.length; index++) {
   var element = guestList[index];
  console.log(`Dear ${element} You are invited`)
}
console.log(`Dear ${updated} sorry you can’t invite to dinner. `);
