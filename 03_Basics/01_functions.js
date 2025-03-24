 function sayMyname(){
    // console.log("T");
    // console.log("A");
    // console.log("R");
    // console.log("A");
    // console.log("N");
    // console.log("D");
    // console.log("E");
    // console.log("E");
    // console.log("P"); 
 }

/*   Function Syntax */

//   function function_name (){
//         statement;
//      }

function sayMyname () {
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("A");
    }
    
    // sayMyname      // Refrence
    // sayMyname()   // Execute
    
    
    // Ab dekhte hai 2 num ko add krke 
    
    function addTwoNum (num1,num2) {
       console.log( num1+num2);
       
    }
    // addTwoNum(3,6)   // 9
    // addTwoNum(3,"4")    // 34
    // addTwoNum(3,null)     // 3
    
    
    function addTwoNum (num1,num2) {
        // let result = num1+num2;
        // return result;
        return num1+num2;
        
     }
    const result = addTwoNum(3,6)   
    // console.log("Result " , result);
    
    
    function userLoggedIn(username = "Tania") {
        if (!username) {
            console.log("Please enter user name");
            return;
        }
        return `${username} just logged in `
    }
    
    // console.log(userLoggedIn())  
    
   //console.log(userLoggedIn("Tania"))  // Tania just logged in 
    
    // console.log(userLoggedIn(""))   // just logged in 