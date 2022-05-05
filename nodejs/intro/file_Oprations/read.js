const fs = require('fs')

// __dirname --> for the directory where this file located
/**
 * .readFile takes two arguments in call back one for error and other for storing data
 */
fs.readFile(__dirname + '/text.txt', ((err,data)=>{
    if (err) throw err
    console.log('data is written in the file --> \n'+data.toString())
}))