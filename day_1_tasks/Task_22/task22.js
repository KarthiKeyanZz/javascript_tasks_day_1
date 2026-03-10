// TASK 22: Variable Inside Block
// Write this code and observe what happens:
// javascript
// {
//  var a = 100
//  let b = 200
//  const c = 300
// }
// console.log(a)
// console.log(b)
// console.log(c)

{
    var a = 100
    let b = 200
    const c = 300
}

console.log(a)
console.log(b)
console.log(c)

//Observation 

// since let is not a global scope . when accessing the let variable b . i got below error

//ERROR : 
// task22.js:20 Uncaught ReferenceError: b is not defined
// (anonymous)	@	task22.js:20


// const is also not a global scope but a block scope . so while accessing a block scoped variable . for the 
// const variable c i got the below error

//ERROR:
// task22.js:21 Uncaught ReferenceError: c is not defined