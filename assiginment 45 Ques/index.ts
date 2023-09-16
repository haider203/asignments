// # Getting Started Exercises with TypeScript and Node.js

// Note: Try these short programs to get some firsthand experience with TypeScript and Node.js.
// You might want to create a new folder for each exercise to keep them organized. Create a single Github repository to commit the code for these exercises and once finished submit the URL of the repo. 

// 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
 
// var personName:string="Haider ali tariq";
// console.log(`Hello ${personName} would you like to learn some Python today?`);


// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.
 
// var personName:string="haider ali tariq";

// console.log(personName.toUpperCase());
// console.log(personName.toLowerCase());
// console.log(personName.charAt(0).toUpperCase()+personName.slice(1));



// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”





// var personName:string="Albert Einstein";
// var quotation:string="“A person who never made a mistake never tried anything new.”"
// console.log(`famous person ${personName} once said, ${quotation}`);





// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called 
//famous_person. Then compose your message and store it in a new variable called message. Print your message.

// var personName:string="Albert Einstein";
// var qoutation:string="“A person who never made a mistake never tried anything new.”"
// var result:string=qoutation;
// console.log(personName,"once said",result);


// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
//and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed.
//Then print the name after striping the white spaces.

// var personName:string="\t Haider Ali Tariq \n";
// console.log("name with white space",personName);
// var strippedName:string=personName.trim();
// console.log("without space",strippedName);



 



// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the
// number 8. Be sure to enclose your operations in print statements to see the results. 

// var sum:number=5+3;
// var subtraction:number=10-2;
// var multiplication:number=4*2;
// var division:number=16/2;


// 8. You should create four lines that look like this:

// Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(`_____________________________________________`);

//  console.log(sum);

//  console.log(`_____________________________________________`);
//  console.log(subtraction);

//  console.log(`_____________________________________________`);
//  console.log(multiplication);

//  console.log(`_____________________________________________`);
//  console.log(division);



// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that
// reveals your favorite number. Print that message.
// function favoriteNumber(num1:number) {
//     let result:number=num1;
//     return result;
// }

// console.log(`here is your favorite number ${favoriteNumber(11545)}`);


// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, just add your 
//name and the current date at the top of each program file. Then write one sentence describing what the program does.


// var favorite:number=4545;//assiging variable 
// var result=favorite;//her we store into result
// console.log(`your favourite number is her ${result}`);



// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
//accessing each element in the list, one at a time.
// let names:string[]=['naveed','zia ','usman','ali ','suleman'];
// for (let name of names) {
// console.log(name);
// }

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized 
//with the person’s name.

// let names:string[]=['naveed','zia ','usman','ali ','suleman'];
// for (let name of names) {
// console.log("welcome to our school",name);
// }

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
// that stores several examples. Use your list to print a series of statements about these items, such as 
//“I would like to own a Honda motorcycle.”

// const Ftransport:string[]=['Honda car','suzuki motorcycle','sehrab cycle'];


// for (let i = 0; i < Ftransport.length; i++) {
    
    
// console.log(`i would like to own a ${Ftransport[i]}`);

// }



// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print 
//a message to each person, inviting them to dinner.

// let guestList:string[]=['Arlan','Ahmad','Ali','Haider'];
// guestList.forEach(item=> console.log(`${item} you are invited for dinner`));


// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.



// let guestList:string[]=['Arlan','Ahmad','Ali'];
// guestList.push("usman","zaheer");//add two more guest  
// console.log(guestList);
// //• Print a second set of invitation messages, one for each person who is still in your list.
// guestList.forEach(item=> console.log(`${item} you are invited for dinner`));//use for loop as well
// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// guestList.splice(2,1,"tariq");
// console.log(guestList);



// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
//let guestList:string[]=['Arlan','Ahmad','Ali','Haider'];

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.
//guestList.unshift("Saad");
//console.log(guestList);

// • Add one new guest to the middle of your array.
//guestList.splice(3,0,"Abbas");
//console.log(guestList);

// • Use append() to add one new guest to the end of your list.
//guestList.push("Subhan");
//console.log(guestList);

// • Print a new set of invitation messages, one for each person in your list.
//guestList.forEach(item=> console.log(`${item} you are invited for dinner`));


// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
// let guestList:string[]=['Arlan','Ahmad','Ali','Haider'];

// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
// //only two people for dinner.
// //guestList.forEach(list=>console.log(`${list} Dear Guest space only for two people `))
// // • Remove guests from your list one at a time until only two names remain in your list. 
// //Each time you pop a name from your list, print
// while (guestList.length > 2  ) {
//     let RemoveGuest = guestList.pop();  
//     console.log(`${RemoveGuest} Sorry you are not invited for dnner`);
    
// }

// // a message to that person letting them know you’re sorry you can’t invite them to dinner.


0// // • Print a message to each of the two people still on your list, letting them know they’re still invited.
// guestList.forEach(list=> console.log(`${list} you are still inivited`));
// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// // of your program.
// guestList.pop();

// console.log(`${guestList} sorry form removal`);




// 18. Seeing the World: Think of at least five places in the world you’d like to visit.


//let favPlace:string[]=['UK','Austrilia ','FInland','Canada','Maslysia'];

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.
//console.log(favPlace);

// • Print your array in alphabetical order without modifying the actual list.
// let Arr=[...favPlace].sort();
// console.log(Arr);

// • Show that your array is still in its original order by printing it.
// console.log('Its Original Array',favPlace);

// • Print your array in reverse alphabetical order without changing the order of the original list.
//let Arr2=[...favPlace].reverse();
//console.log(Arr2 ,"in reverse array");

// • Show that your array is still in its original order by printing it again.
//console.log(favPlace, "after reverse its aagain orignal array");
// • Reverse the order of your list. Print the array to show that its
// order has changed.
//let Arr2=[...favPlace].reverse();
//console.log(Arr2 ,"in reverse array");
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
//console.log(favPlace, "after reverse its aagain orignal array");

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// let Arr=[...favPlace].sort();
// console.log(Arr ,"again changed");
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//let Arr2=[...favPlace].reverse();
//console.log(Arr2 ,"in reverse array");




// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating 
//the number of people you are inviting to dinner.

// let guestList:string[]=['Arlan','Ahmad','Ali','Haider'];

// console.log(guestList.length , guestList, "you are invited to dinner");




// 20. Think of something you could store in a array. For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
//containing these items.


// let favPlace:string[]=['UK','Austrilia ','FInland','Canada','Maslysia'];
// for (let i = 0; i < favPlace.length; i++) {
   
//     console.log(favPlace[i]);
    
// }



// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects 
//containing these items.

// const studentInfo={
//     Name:"Haider",
//     age:30,
//     isStudent:true,
//     city:"jaranwala",
//     Provence:"Punjab",
//     country:"Paksitan",
// };
// console.log(`Its your Information for admision `,studentInfo);





// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.


// let arr:number[]=[1,2,3,4,5];

// console.log(`index error ${arr[6]}`);
// console.log(`index should be within the array in this case 0-4 ${arr[2]}`);


// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru');




// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// let bike = "CD70"; //exampal no 1
// console.log(`is bike ${bike} i predict true`);
// console.log(bike != "CD70" );//not equal oprator this will false 


// let weather = 'cool';// exampal no 2
// console.log(weather == 'cool' , `Wather is Cool you are right`);
// console.log(weather != 'cool' , `Weather is Hot You were Wrong`);


// let age:number = 58;// exampal no 3
// if (age >= 60) {
//     console.log(" above 60 year senior Citezon");
    
// } else {
// console.log("below 60 year Senior Citizon");
// }
// console.log(age , "here is result");



// let employe = "local";// exampal 4
// console.log(`if Employe Is ${employe} will be eligibal for Guest Room`);
// if (employe == "local") {
//     console.log("you are Eligibal");    
// } else {
//     console.log("you are Not Eligibal");    
// }


// let salary = 60000; // exampal 5
// if (salary >= 60000) {
//     console.log("Eligibal for Senior Manager");
    
// } else {
//     console.log("wait for yealy Increment");    
// }


// let houseRent = 30000; //exampal 6
// console.log(`House Rent = 30000 Eligibal for month Rent Allowance   `);
// console.log(houseRent  == 30000 , "Eligibal for Allowance");
// console.log(houseRent  != 30000 , " not Eligibal for Allowance");




// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
//try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// var Name:string = "Haider Ali Tariq";
// console.log(Name == "Haider Ali Tariq");// True Equality 
// console.log(Name != "Haider Ali Tariq");// Fasle Unequality


// • Tests using the lower case function
// console.log( Name == "haider ali tariq");


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to

// let num:number=5;
// console.log(num==5);//equal
// console.log(num != 6);//not equal 
// console.log(num>4);//greater 
// console.log(num<6);//less
// console.log(num >=5);//greater & equal 
// console.log(num <=5);//less then & equal 


// • Tests using "and" and "or" operators
// var num:number=20;//and oprator both condition should be true otherwise fasle
// if (num >19 && num >15) {
//     console.log("ture");
    
// } else {
//     console.log("false");
// }


// var num:number=20;//OR oprator both condition fasle it will be fasle  otherwise ture
// if (num >21 || num >21) {
//     console.log("ture");
    
// } else {
//     console.log("false");
// }




// • Test whether an item is in a array
// • Test whether an item is not in a array

// const arr:number[]=[1,2,3,4,5,6,7,8,9,10];
// const find:number = 1;

// if (arr.includes(find)) {
//     console.log(`item ${find} is in array`);
    
// } else {
//     console.log(`item ${find} is not in array`);
    
// }



// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and 
//assign it a value of 'green', 'yellow', or 'red'.

//let alien_color = "Red";

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player
// just earned 5 points.
// if (alien_color == "Red") {
//     console.log("you earned 5 Points");
        
// } 

// • Write one version of this program that passes the if test and another that fails. (The version that fails will
// have no output.)
// else {
//     console.log("you failed");
// }



// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.


 

// var alien_color = "green";
// if (alien_color == "green") {
//     console.log("just earned 5 points for shooting the alien");
    
// } else {
//     console.log("player just earned 10 points");
// }



// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// var alien_color:string="green"
// if (alien_color == "red") {
//     console.log("player earned 15 points");
    
// } else if (alien_color == "green"){
//     console.log("player earned 5 points");
    
// }
//  else if (alien_color == "yellow"){
//     console.log("player earned 10 points");
    
// }
// else{
//     console.log("you loose  the game choose another colour");
    
// }




// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the 
//variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

// let age:number = 66;
// if (age > 0 && age <= 2) {
//     console.log("person is a baby");
    
// } 
// else if(age > 2 && age <= 4) {
//     console.log("person is a toddler");
    
// }
// else if(age > 4 && age <= 13) {
//     console.log("person is a teenager");
    
// }
// else if(age > 13 && age <= 20) {
//     console.log("person is an adult");
    
// }
// else if(age > 20 && age <= 65) {
//     console.log("person is an adult");
    
// }
// else {
//     console.log("person is elder");
// };
    



// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
// that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
// is in your array, the if block should print a statement ,such as You really like bananas!

// let fruits:string[]=['Apple','Mango','Grapes','Banana','Great Fruits'];
// let favorite_fruits:string[]=['Mango','Grapes','Banana'];
//  if (favorite_fruits.includes('Mango')) {
//     console.log('you like Mango');
    
//  }
//  if (favorite_fruits.includes('Grapes')) {
//     console.log('you like Grapes');
    
//  }
//  if (favorite_fruits.includes('Banana')) {
//  console.log('you like Banana');
    
//  }
//  if (fruits.includes('Apple')) {
//  console.log('you dont like apple');
    
//  }
//  if (fruits.includes('Great Fruits')) {
//  console.log('you dont like Great Fruits');
    
//  }








// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing 
//code that will print a greeting to each user after they log in to a website. Loop through the array, and print a
// greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status 
//report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let usernames:string[]=['admin','ali','tariq','saad','hasan'];
// for (let i = 0; i < usernames.length; i++) {
//     if (usernames[i] === 'admin') {
//         console.log("Hello admin, would you like to see a status report");
        
//     }
//     else{
//         console.log(`hello ${usernames[i]} thank you for logging in again`);
        
//     }
    
// }





// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

//  let usernames:string[]=['admin','ali','tariq','saad','hasan'];
// usernames.splice(0,5);
// console.log(usernames);
// if (usernames = []) {
//     console.log("need to find some users");
    
    
// }







// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone 
//has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
//also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print 
//a message that the person will need to enter a new username. If a username has not been used, print a message 
//saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users:string[] = ['ali','haider','tariq','saad','umair']

let new_users:string[]=['ali','yasir','qadeer','zaid','saad']








// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// let arr:number[]=[1,2,3,4,5,6,7,8,9];
// for (let i = 0; i <= arr.length; i++) {
//      if (i === 1) {
//         console.log(`${i}st`);
        
//      } 
     
//      else if(i === 2) {
//         console.log(`${i}nd`);
        
//      }
//      else if(i === 3) {
//         console.log(`${i}rd`);
        
//      }
//      else if(i === 4) {
//         console.log(`${i}th`);
        
//      }

//      else if(i === 5) {
//         console.log(`${i}th`);
        
//      }
//      else if(i === 6) {
//         console.log(`${i}th`);
        
//      }
//      else if(i === 7) {
//         console.log(`${i}th`);
        
//      }
//      else if(i === 8) {
//         console.log(`${i}th`);
        
//      }
//      else if(i === 9) {
//         console.log(`${i}th`);
        
//      }
//      else {
//         console.log(`you choose wrong Number It can be ${i}`);  
//      }
// }






// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!

// let favorite_pizza:string[]=['fajita pizza','chees pizza','chiken tika pizza'];
// for (let i = 0; i < favorite_pizza.length; i++) {
     
// console.log(`i like ${favorite_pizza[i]}`);
// console.log(`i really love pizza!`);


     
// }



// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!


// let animals:string[] = ['dog','lion','goat'];
// for (const animal of animals) {
// if (animal === 'dog'){
//      console.log(`${animal} is a great pet`);
     
// }
// else if(animal === 'lion'){
// console.log(`${animal} is a beautiful pet but also quite dangerous`);

// }
// else if(animal === 'goat'){
//      console.log(`${animal} is a pet also milk given animal`);
     
//      }


// }








// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

// function make_shirt(size:number,massage:string) {
//      console.log(`my t-shirt ${size} and  this massage ${massage} i want  to printout`);
     
// }
// console.log(make_shirt(45, `"i love pakistan"`));






// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with 
//a different message.

// function make_shirt(size:any) {
//      if (size === 'large') {
//           console.log("I Love TypeScript");
//      } 
//      else if (size === 'medium'){
//           console.log(`Proud to be a Pakistani`);
                    
//      }
//      else if (size === 'small'){
//           console.log(`Say no to Drugs`);
                    
//      }
//      else{
//           console.log('sorry you Choose not correct size');
          
//      }
// }
// console.log(make_shirt("small"));




// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country 
//a default value.
// Call your function for three different cities, at least one of which is not in the default country.


// function describe_city(city:string ,country:string = `defualt country`) {
// console.log(`${city} is in ${country}`);
     
// }
// console.log(describe_city("lahore"));//default country
// console.log(describe_city("london","uk"));
// console.log(describe_city("new york","america"));





// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.


// function describe_city(city:string ,country:string ) {
//      console.log(`${city} is in ${country}`);
          
//       }
//      console.log(describe_city("istambol" , "turkey"));
//      console.log(describe_city("london","uk"));
//      console.log(describe_city("new york","america"));


// 40. Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different albums. Print each return value to show
// that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line
// includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call 
//that includes the number of tracks on an album.

function make_album(name:string,title:string) {
     
}



// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.


// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.




