const express = require('express')

const app = express()
function m1 (req,res,next){
    console.log('pre m1');
    next()
    console.log('post m1');
}function m2 (req,res,next){
    console.log('pre m2');
    next()
    console.log('post m2');
}function m3 (req,res,next){
    console.log('pre m3');
    next()
    console.log('post m3');
}
app.get('/hello',m1,m2,m3,(req,res)=>{
    console.log('pre - send')
    res.send('Hello World')
    console.log('post - send');
})

app.listen('4343',()=>{
    console.log('Server Started on http://localhost:4343')
})