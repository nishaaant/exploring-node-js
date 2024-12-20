var a = 20;
var b = 100;
// console.log("Nishant Rajput")
// require("./xyz.js")
const {calculateSum,calculatedivide,calculatemultiply,calculatesubtract} =require("./calculate")

console.log("Sum = "+calculateSum(a,b))
console.log("subtract = "+calculatesubtract(a,b))
console.log("multiply = "+calculatemultiply(a,b))
console.log("divide = "+calculatedivide(a,b))
// console.log(globalThis)