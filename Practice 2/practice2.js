var age=99;
var ages = [23,25,28,29,32,40]; //array
let names = ["Brandon", "Shane", "Rom", "Ricky", "Dorothy", "Edgar", "Jake"];

let myArray = ["string",10, true];
let newArray = ["What is the meaning of life", 42,true];


//console.log(myArray);
//console.log(newArray[0]);
//console.log(ages);
//console.log(ages.length);

//const numbers=[10,20,30,40,50];
//console.table(numbers);

const months=["Jan","Feb","Mar","Apr", "May"];
console.table(months);

//access to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Array dimension
console.log(numbers.length); 

numbers.push(60,70,80); //add values at the end
numbers.unshift(-10,-20,-30); //add values at the start

console.table(numbers);

months.pop(); //deletes last element
months.shift(); //deletes first element
//splice element number, 1 element 

months.splice(2,1);
console.table(months);