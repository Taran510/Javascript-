const user = {
    userName : "Ranjeet",
    price : 199,
    welcomeMsg : function (){
    console.log(`${this.userName} , Welcome to website`);
       console.log(this)
    }  
} 

// user.welcomeMsg()
// user.userName = 'Jeet'
// user.welcomeMsg()

console.log(this)

// function tania (){
//     let user = 'Tania'
//     console.log(this.user)
// }
// tania()
// const newSecFun = function (){
//     let user = 'tania'
//     console.log(this.user);
// }
// newSecFun()

// const new3Fun = () => {
//     let user = 'Ranjeet'
//     console.log(this.user);
// }
// new3Fun()

// const AddTwoNum = (num1,num2) => {
//      return num1+num2;
// }
// console.log((AddTwoNum(4,5)));



// const AddTwoNum = (num1,num2) => (num1+num2);

// const AddTwoNum = (num1,num2) => {username : 'K'}; 

const AddTwoNum = (num1,num2) => ({username : 'R'}); // { username: 'R' }

console.log((AddTwoNum(4,5)));