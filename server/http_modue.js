const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=== '/'){
        res.write('Hello there, this is an initial home route');
        res.end();
    }
    if(req.url=== '/api/books'){
        res.write(JSON.stringify({id:'1', name: 'Ponniyin Selvan'}))
        res.end()
    }
})

server.listen('8000')

console.log('listening on server 8000')