//  for of 

//  Arary specific loop

// ["","",""]    // string

// [{},{},{}]   // object

const array = [1,2,3,4,5,6]
for (const arr of array) {
  //  console.log(arr);
    
}

const greeting = "Hello Ranjeet Kumar"
for (const greet of greeting) {
    if(greet == " "){
      //  console.log("write properly");
        // break
       // continue
    }
  //  console.log(`Each element is ${greet}`);
    
}


// Isi trike se Maps bhi hota hai

// Maps mein unique value hoti hai  (The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.)

const map = new Map()
map.set('IN', "India")
map.set('USA',"United state of america")
map.set('FR', "France")
// map.set('IN', "India")  Dubara print nhi hoga kuki ye sirf uniqe value ko hold krta hai
// console.log(map)
// console.log(map.size) // isse iski size pta kr skte hai
// console.log(map.get('USA'))  // sirf vhi aayega jisko access kia hai
// console.log(map.delete("USA"))
// console.log(map.size) 



//  for (const key of map) {
//  console.log(key) // jb isko print kia to sari value alg alg aa gyi vo bhi arary mein
//  }

for (const [key , value] of map) {
   // console.log(key,':-',value);
    
} 


const myObj = {
    'username' : 'Ranjeet',
    'email' : 'rk@gmail.com'
} 

for (const [key,value] of myObj) {
   // console.log(key , value)     //not working
}
 // Object pr for of loop kam nhi kr rha 

