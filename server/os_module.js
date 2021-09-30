const OS = require('os')

const totalMemory = OS.totalmem();
const freeMemory = OS.freemem();

console.log(`Total Memory in bytes : ${totalMemory}`)
console.log(`Free Memory in bytes : ${freeMemory}`)