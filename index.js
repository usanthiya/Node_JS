const { format } = require('date-fns');
const { v4: uuid} = require('uuid');

console.log("Today's date and time: ", format(new Date(), 'dd-MM-yyyy hh:mm:ss'))
console.log(uuid())
console.log("Hello world!")
console.log("testing")