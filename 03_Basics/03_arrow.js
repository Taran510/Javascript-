const user = {
    userName : "Tania",
    price : 199,
    welcomeMsg : function (){
    console.log(`${this.userName} , Welcome to website`);
       console.log(this)
    }  
} 

// user.welcomeMsg()
// user.userName = 'Tania'
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
//     let user = 'Tania'
//     console.log(this.user);
// }
// new3Fun()

// const AddTwoNum = (num1,num2) => {
//      return num1+num2;
// }
// console.log((AddTwoNum(4,5)));



// const AddTwoNum = (num1,num2) => (num1+num2);

// const AddTwoNum = (num1,num2) => {username : 'T'}; 

const AddTwoNum = (num1,num2) => ({username : 'T'}); // { username: 'T' }

console.log((AddTwoNum(4,5)));