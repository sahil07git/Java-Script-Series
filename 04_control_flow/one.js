// if

// const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50");
    
// } else {
//     console.log("tempreture is greater than 50");
    
// }

// console.log("exectued");

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("lesss than 1200");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = false

if (userLoggedIn && debitCard) {
    console.log("Allow to by course");
    
}

if (loggedInFromGoggle || loggedInFromEmail) {
    console.log("User logged In");
    
}

