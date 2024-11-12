//- Primitive
//? 7 types of datatype are there in js 
//* Boolean, string, number, null, undefined, symbol, bigint.

const score = 100
const scoreF = 102.2
const scoreB = true
const outsideTemp = null  //? it's value is equivalent to 0
let dontKnow = undefined //? 1 example of undefined
let dontKnow2; //? Example 2 to undefined datatupe
const id = Symbol(30)
const idTwo = Symbol(30)
// console.log(id === idTwo); //? this operator is to check datatype too
const bigN = 22002020030030n //? n represents it's a bigint value




//- Non-Primitive Datatypes or Reference types
//* Array, objects, functions

//* Array in js
const superHero = ["IronMan", "Batman", "Hulk", "Thor"];

//* Object

const myObj = {
    name: "Someone Name",
    age: 20,
    Number: 9000404004
}


//* Function using variable

const MyFunc = function (){
    console.log("Print hello Function");
}
MyFunc()


//- how to know anything datatype

console.log(typeof(myObj));
console.log(typeof(id));
console.log(typeof(MyFunc));
console.log(typeof(superHero));
console.log(typeof(bigN));
console.log(typeof(outsideTemp));
console.log(typeof dontKnow2);


//todo assignment todo is to what is return typeof every datatype