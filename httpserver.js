const http = require('http');

const port = process.env.port || 3002;

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1> This is CodewithKaleem</h1><p> Hey this is the way you can rock the world!.</p>');
})

server.listen(port,()=>{
  console.log('Server is listeing on port');
});