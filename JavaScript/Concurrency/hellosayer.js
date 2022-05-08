function hellosayer(name,time){
    return new Promise((resolve,reject) =>{
        let count = 0
        let loopid = setInterval(() => {
            count ++
           console.log("Hello " + name)
           if (count === time){
               clearInterval(loopid)
               resolve()
           }
        },100)
    })
}

// Concurrently

hellosayer('Ankit',3)
    .then( hellosayer('Mousami',2))
    .then( hellosayer('Ankit',3))
    .then( hellosayer('Paras',3))
    .then( hellosayer('Minku',3))

// Sequentially

hellosayer('Ankit',3)
    .then(() => hellosayer('Mousami',2))
    .then(() => hellosayer('Ankit',3))
    .then(() => hellosayer('Paras',2))
    .then(() => hellosayer('Minku',4))
