const http = require('http');
const fs = require('fs');

const port = process.env.port || 3002;

const server = http.createServer((req,res)=>{
    console.log(req.url)

    res.setHeader('Content-Type','text/html')
    if(req.url=='/'){
        res.statusCode = 200;
        res.end('<h1> This is CodewithKaleem</h1><p> Hey this is the way you can rock the world!.</p>');
    }
    else if(req.url=='/about'){
        res.statusCode = 200;
        res.end('<h1> About CodewithKaleem25</h1><p> Hey this is the codewithKaleem,tesing nodemon as well</p>');
    }
    else if(req.url=='/kaleem'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Not Found on server</h1>');
    }        
 
})

server.listen(port,()=>{
  console.log('Server is listeing on port');
});