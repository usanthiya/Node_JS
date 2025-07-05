const os= require('os');
const path= require('path');
const {add, sub, mult, div} = require('./math')
// const math= require('./math')

console.log(os.type())
console.log(__dirname)
console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log('--------------------------------------')
console.log("Addition: ", add(10,2))
console.log("Subraction: ", sub(10,2))
console.log("Multiplication: ", mult(10,2))
console.log("Division: ", div(10,2))

// console.log("Addition: ", math.add(10,2))
// console.log("Subraction: ", math.sub(10,2))
// console.log("Multiplication: ", math.mult(10,2))
// console.log("Division: ", math.div(10,2))