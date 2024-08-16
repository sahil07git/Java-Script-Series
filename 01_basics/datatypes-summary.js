// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

/*
JavaScript is a dynamically typed language
JavaScript is a loosely typed language
*/

/*
A language is called Dynamically typed if the ‘type’ of a variable is checked only during the runtime unlike at compile time in a statically typed language. With this support, the developers need not specify the data type of any variable while writing the code.
*/

const score = 100 // typeOf is number
const scoreValue = 100.5 // typeOf is number

const isLoggedIn = false // typeOf is boolean
const outsideTemp = null // typeOf is object
let userEmail;   // value is undefined and also the typeOf is undefined

const id = Symbol('123') // typeOf is symbol
const anotherId = Symbol('123') // typeOf is symbol

 // console.log(id === anotherId);

const BigNumber = 244423545465452323n // typeOf is bigInt




// Reference (Non Primitive)

// Arrray, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // typeOf is object

let myObj ={ 
    name: "Sahil",
    age: 20,
}  // typeOf is object


// typeOf is Function
const myFunction = function(){
     // console.log("Hello World!");  
    
}

console.log(typeof myFunction);



// *******************************************************************************

// Stack (Primitive), Heap (Non-primitive)

let myYoutubename = "sahilkamiladotcom"

let anothername = myYoutubename
anothername = "ghsidnjc"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sahil@google.com"

console.log(userOne.email);
console.log(userTwo.email);



