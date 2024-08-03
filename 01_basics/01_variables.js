const accountId = 1445532
let accountEmail = "sahil@google.com"
var accountPassword = "12345"
accountCity = "Jharkhand"

 let accountState;

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "des@google.com"
accountPassword = 234521
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefered not To Use Var
because of issue in block scope and functional scope
*/

s