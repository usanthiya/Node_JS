// There’s a person called Event Emitter.
// This person shouts when something happens — like "🎂 It's cake time!"

// There’s another person called Event Listener.
// This person is always listening for that shout.

//  When the Event Emitter shouts:
// “It’s cake time!”

// The Listener hears it and says:

// “Yay! I’m coming to eat cake!”

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// This is the listener: waiting to hear "cake"
myEmitter.on('cakeTime',()=>{
    console.log("Yay! I’m coming to eat cake!");
})

// This is the emitter: shouting "cake"
myEmitter.emit('cakeTime');
myEmitter.emit('cakeTime');


// ----------------------------------------------------------
// one time listener : once() 

myEmitter.once('userLogin',(user)=>{
    console.log(`User ${user} logged in!`);
})

myEmitter.emit('userLogin', 'Santhiya');
myEmitter.emit('userLogin', 'John'); // This won't trigger the listener again


// ----------------------------------------------------------
// removeListener(event, listener)- Remove a specific listener

function greet(){
    console.log("Hello!");
}

myEmitter.on('greet', greet);

myEmitter.emit('greet');

myEmitter.removeListener('greet', greet);

myEmitter.emit('greet');

// ----------------------------------------------------------
// removeAllListeners(event)- Remove all listeners for an event
// removeAllListeners() without arguments removes all listeners for all events.


function greet1(){
    console.log("Hello from greet1!")
}

function greet2(){
    console.log("Hello from greet2!")
}

myEmitter.on('greet', greet1);
myEmitter.on('greet', greet2);

myEmitter.emit('greet');
myEmitter.removeAllListeners('greet');
myEmitter.emit('greet'); // No output, as all listeners for 'greet' have been removed
