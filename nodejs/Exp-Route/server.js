const express = require('express')
const app = express()
const todoRoute = require('./routes/todos.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public', express.static(__dirname + '/public'))
app.use('/todos',todoRoute)

app.listen(3000,()=>{
    console.log('server started on http://localhost:3000')
})