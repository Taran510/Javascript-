// let a = 10;
// const b = 12;
// var c = 13;

// console.log(a);
// console.log(b);
// console.log(c);

// var c = 300          

let a = 150;

if(true){             
    let a = 10;
    const b = 12;
    // console.log("INNER ",a);
}

 console.log(a);    // Error
 console.log(b);     // Error
 console.log(c);       // 13

//
function one(){
    userName = "Ranjeet"

    function two() {
        const website = "Git"
       // console.log(userName)
    }
    // console.log(website);

   two()
}
one()

if(true){
    const user_name = "Jeet"
    if (user_name === "Jeet") {
        const website = "youtube"
        // console.log(user_name + website);
    }
    // console.log(website);
}
// console.log(user_name);


// ********* Interesting *********

 console.log(addOne(5))
 function addOne(num){
     return num+1;
 }
  
// add_Two()
// const add_Two = function(num){
//     return num + 2
// }

