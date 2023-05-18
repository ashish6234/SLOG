// if else condition 

let age = 17;

if (age >= 18) {
    console.log("User can play ddlc");
} else {
    console.log("User can play mario");
}

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }


//=================================================================================================================================================


// ternary operator 

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// ternary operator / conditional operator 

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

//=================================================================================================================================================

// and  or operator 



// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
// let firstName = "arshit";
// let age = 16;

// if(firstName[0] === "H" || age>18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }



//=================================================================================================================================================

// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if (userGuess === winningNumber) {
    console.log("Your guess is right!!");
} else {
    if (userGuess < winningNumber) {
        console.log("too low !!!");
    } else {
        console.log("too high !!!");
    }
}

//=================================================================================================================================================
// if 
// else if 
// else if 
// else if 
// else 

// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello");
















// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello there");



let tempInDegree = 4;

if (tempInDegree > 40) {
    console.log("too hot");
} else if (tempInDegree > 30) {
    console.log("lets go for swim");
} else if (tempInDegree > 20) {
    console.log("weather is cool");
} else if (tempInDegree > 10) {
    console.log("it is very cold outside");
} else {
    console.log("extremely cold");
}

console.log("hello");

//=================================================================================================================================================


// switch statement 


// let day = 7; 


// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }


let day = 9;

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}



//=================================================================================================================================================


// while loop 

// 0 se 9 
// dry don't repeat yourself
let i = 0; // 1 2 3 4

while (i <= 9) {
    console.log(i);
    i++;
}
console.log(`current value of i is ${i}`);
console.log("hello");


// while loop example 
let num = 100;
// let total = 0; //1 + 2 +3
// let i = 0;


// while(i<=100){
//     total = total + i;
//     i++;
// }


// console.log(total);

// let total = (num*(num+1))/2;
// console.log(total);




//=================================================================================================================================================

// intro to for loop 
// print 0 to 9

for (let i = 0; i <= 9; i++) {
    console.log(i);
}

// console.log("value of i is ",i);


// for loop example 

// let total = 0;

// let num = 100;

// for(let i = 1; i<=num; i++){
//     total = total + i;
// }

// console.log(total);

// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);



//=================================================================================================================================================



// break keywork

// continue keyword 

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
console.log("hello there");



//=================================================================================================================================================



// do while loop

// while(i<=9){
//     console.log(i);
//     i++;
// }

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);

// console.log("value of i is ", i);

//=================================================================================================================================================