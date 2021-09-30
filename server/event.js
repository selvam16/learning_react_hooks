// event is a signal that something is happened

//https://nodejs.org/api/events.html

// here event is class

const EventEmitter = require('events')

const event = new EventEmitter();
// event.addListener and event.on both are same
event.on('LogMessage',()=>console.log('Log message event is called'));

//emit means making a noise, produce signaling
// Raise an event
event.emit('LogMessage')

//Event with arguments
event.on('EventWithArgs',eventArgs=>console.log(`Event called with args ${JSON.stringify(eventArgs)}`))

event.emit('EventWithArgs',{id:1, name:'selvam'})
