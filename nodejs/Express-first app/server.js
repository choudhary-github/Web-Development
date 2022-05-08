const express = require('express')

const app = express()

app.get('/hello',(req,res)=>{
    res.send('Hello World')
})

app.use('/abc', express.static(__dirname + '/public'))

app.listen(4444,()=>{
    console.log('server started on http://localhost:4444');
})