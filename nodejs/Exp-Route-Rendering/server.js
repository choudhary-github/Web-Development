const express = require('express')
const todoRoute = require('./routes/todos')
const app = express()

app.use(express.json())
app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))
app.use('/todos',todoRoute)

app.listen(4567,()=>{
    console.log('server started on http://localhost:4567');
})
