const express = require('express')

const app = express()

app.use(express.urlencoded({extended:true}))
app.set('view engine','hbs')

let tasks = [
    'sample task'
]

app.get('/',(req,res)=>{
    res.render('home',{
        title: 'ToDo List',
        tasks
    })
})


app.post('/',(req,res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')
})

app.listen(4445,(req,res)=>{
    console.log('server stared')
})