const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))
var rawData

function decryptData(data){
    let encodedData = ''
    let str
    for(let i in data){
        str = data[i]
        if (data[i] == str.toUpperCase()) {encodedData  += str.toLowerCase()}
        else if (data[i] == str.toLowerCase()) {encodedData += str.toUpperCase()}
        else {encodedData += str}
}         
    return encodedData
}

function decrypt (req,res,next){
    var data
    for (let d in req.query){
        data = req.query[d]
    }
    rawData = decryptData(data)
    // console.log(rawData)
    next()
}


function decodeBase64 (req,res,next) {
        rawData = new Buffer.from(rawData, 'base64').toString('ascii')
        // return rawData
        // console.log(rawData);
        next()
    }

app.get('/eval',decrypt,decodeBase64,(req,res)=>{
    console.log(rawData)
    res.send('')
})

app.listen(4545, ()=>{
    console.log('server started at http://localhost:4545');
})