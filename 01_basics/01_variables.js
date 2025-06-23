const accountId = 17320
let accountEmail = "devin@google.com"
var accountPassword = "23482"
accountCity = "Mumbai"

let accountState;

// accountId = 90434 --> cannot make changes to const variable

accountEmail = "hc@hc.com"
accountPassword = "8493543"
accountCity = "Panvel"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity ,accountState])