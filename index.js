const EventEmitter = require('events');
const logEvents= require('./logEvents');

const myEmitter = new EventEmitter();

myEmitter.on('log',(msg)=>{
  logEvents(msg);
})

myEmitter.emit('log','log event emitted!')