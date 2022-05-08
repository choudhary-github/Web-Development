const express = require('express')

app = express()

app.listen(5555,()=>{
    console.log('server started')
})
app.use(express.urlencoded({extended:true}))
let task = [
    'sample task'
]

app.get('/',(req,res)=>{
    let tasklist = task.map(t => `<li>${t}</li>`).join('\n')
    res.send(
        `<html>
        <body>
            <form action="/" method="post" >
                <input name="newtask">
                <button type"submit">ADD</button>
            </form>
            <ul>
                ${tasklist}
            </ul>
        </body>
        </html>`
    )
})

app.post('/',(req,res)=>{
    task.push(req.body.newtask)
    console.log(task)
    res.redirect('/')
})