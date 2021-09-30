// import and export files
// in node all files are module

// all module / file has the module wrapper like below 
// https://nodejs.org/api/modules.html#modules_the_module_wrapper

// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
//     });

console.log(__filename)
console.log(__dirname)

function log(msg){
    console.log(msg)
}

// // exorts are the object
// module.exports.log = log;

//only one function we can export as fun too
module.exports = log


//console.log(module)