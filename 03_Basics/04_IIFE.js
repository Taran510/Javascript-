/*  Immediately Invoked Function Expression */
  
// function tania () {
//     console.log(`DB connect`); 
// }
// jeet()

// (function tania () {
//     console.log(`DB connect`); 
// })()

// ( () => {
//     console.log(`DB connect`);
    
// })()

(function tania () {                           // Named IIFE
    console.log(`DB connect`); 
})();

( (name) => {                                 // simple IIFE
    console.log(`DB connect ${name}`);
    
})('Tarandeep')
