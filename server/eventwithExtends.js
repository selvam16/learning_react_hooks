const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(message) {
        console.log(message)

        this.emit('LoggerEmit', { id: 1, name: 'selvam' })
    }
}

module.exports = Logger