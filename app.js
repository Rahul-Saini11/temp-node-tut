// HTTP  module - with this 
const http = require('http');

const server = http.createServer((req , res) =>{
    if(req.url == '/'){
            res.end('Welcome to our page')
    }
    // console.log(req);
    // res.write('Welcome to our home page')
    // res.end()
    if(req.url == './about'){
        res.end('here is our short history');
    }
    res.end(`<h1>OOps!</h1> 
    <p>We can't seem to find the page </p>   <a href="/">back home</a>`
    )
})
server.listen(5000)