// importing fs
let fs = require('fs')

fs.writeFile(__dirname +'/text.txt','this is a demo',(err)=>{
    if (err) console.log(err)
    console.log('Data is written sucessfully')
})