const accountId = 1650
let accountEmail = "tania@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

//accountId = 2 //not allowed 
accountEmail = "taran@gmail.com"
accountPassword = "14679"
accountCity = "Bangaluru"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
