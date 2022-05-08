const express = require('express')

const app = express()


app.get('/',(req,res)=>{
    res.send('<h1>Hello World!</h1>')
    console.log(req.query)
    console.log(req.headers)
})

app.get('/greet',(req,res)=>{
    let person = 'Guest'
    if(req.query.person)
        person = req.query.person
    res.send('Good Morning '+ person )
})

app.listen(4444,()=>{
    console.log('Server Started')
})
