// Author: Brandon Jones
//Created: Wednesday, 22 July 2020
/*
*Task: Write a JavaScript program to display the current day and time in the following format.
*/

//using the Date() to get the current date.
let today = new Date();

// Printing the Day of the week
let currentDate = today.getDay();
let dayList= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Today is: ${dayList[currentDate]}`);

//Printing the time of the day
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let suffix = (hour >= 12)? " PM" : " AM";

// use to take time out of army time
hour = (hour >= 12)? hour - 12 : hour;
if(hour===0 && suffix===' PM '){
  if(minute===0 && second===0){
    hour=12;
    suffix = 'Noon';
  }
  else{
    hour=12;
    suffix=' PM ';
  }
}
if(hour===0 && suffix===' AM '){
  if(minute===0 && second===0){
    hour=12;
    suffix = 'Midnight';
  }
  else{
    hour=12;
    suffix=' AM ';
  }
}

console.log(`Current Time is: ${hour} : ${minute} : ${second}  ${suffix} `);
