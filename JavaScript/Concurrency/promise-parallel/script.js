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

    /*          Promise.all takes an array and await hold the function till it's complete after that the second function will execute          */

(async () =>{
    await Promise.all([
        await hellosayer('Mousami',2),
        await hellosayer('Ankit',4),
        await hellosayer('Paras',2)
    ])

        console.log('------------First Batch Over------------')

    await Promise.all([
        hellosayer('Minku',2),
        hellosayer('Nitish',2),
        hellosayer('Deepak',2)
    ])

})()