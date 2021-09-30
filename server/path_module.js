// this file is example for the build in module path of node  https://nodejs.org/docs/latest/api/path.html
const path = require('path');
const parsedPath = path.parse(__filename); // __filename is from the module wrapper

console.log(parsedPath)


// output wil like below
// {
//     root: 'D:\\',
//     dir: 'D:\\code\\Reactjs\\react_material_ui\\server',
//     base: 'file_module.js',
//     ext: '.js',
//     name: 'file_module'
//   }
  