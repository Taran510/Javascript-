//singleton
//Object.create

//object literals

const mySym = Symbol("Key1")


const JsUser = {
    name : "Tania",
    "full name" : "Tarandeep Kaur",
    [mySym] : "myKey1",
    age : 18,
    location : "Punjab",
    email : "tania@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "tania@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "tania@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name} `)
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);



