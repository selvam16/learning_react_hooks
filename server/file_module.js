// this module has double methods for every operation, synchronous for blocking and asynchronous for nonblocking
// avoid using sync function 
const fs = require('fs');

fs.readdir('./server',(err, files)=> (err)?console.log(err):console.log(files))

// To console error
fs.readdir('./server/test',(err, files)=> (err)?console.log(err):console.log(files)) // this will execute first bcz we are using asyn fun of `readdir` so it won't wait for `callback` of `readdir`
