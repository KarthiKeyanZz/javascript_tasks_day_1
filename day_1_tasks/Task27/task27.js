// TASK 27: var vs let Comparison
// Write a program that:
// Create a var variable inside a block and try to access it outside
// Create a let variable inside a block and try to access it outside
// See which one works

{
    var message = "Good Morning User"
}

console.log(message)

{
    let message_1 = "Good Afternoon User"
}

console.log(message_1)


// i was able to access only var variable as it is a global scope


// while trying to access message_1 which is a let variable from outside of block . i got a error message

// ERROR : 

// task27.js:17 Uncaught ReferenceError: message_1 is not defined