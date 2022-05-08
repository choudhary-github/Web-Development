const express = require('express')

console.log(typeof express)

const app = express()

// for reading body --> for post request
app.use(express.urlencoded({extended:true}))

app.get('/greet',(req,res)=>{
    let person = 'Guest'
    if(req.query.person)
        person = req.query.person
    res.send('Good Morning '+ person )
})


app.get('/:person/:action',(req,res)=>{
    res.send(req.params.person + ' is ' + req.params.action)
})

app.post('/greet',(req,res)=>{
    let person = 'Guest'
    console.log(req.body)
    if(req.body.person)
        person = req.body.person
    res.send('Good Morning '+ person )
})

app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/form/form.html')
})

app.listen(4444,()=>{
  console.log('server started at http//localhost:4444');  
})