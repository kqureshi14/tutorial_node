const express = require('express')

const app = express();

const port = 3003;

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/about',(req,res)=>{
    res.send('This is regarding codewithKaleem')
})

app.listen(port,()=>{
    console.log('Example app listening on port')
})