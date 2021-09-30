const logger = require('./logger')
const LoggerEmit = require('./eventwithExtends')

const loggerObj = new LoggerEmit();

loggerObj.on('LoggerEmit',eventArgs=>console.log(JSON.stringify(eventArgs)))

loggerObj.log('testing the logger emit with extends')


// logger.log('selvam') // For logger as object

logger('test message')
