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
// await do the process in sequentially
// without await task get done parallely 

async function task (){
    await hellosayer('Ankit',3)
    await hellosayer('Mousami',2)
    await hellosayer('Nitish',3)
    await hellosayer('Paras',2)
}

task()
// hellosayer('Minku',4)

/*    this is called IIFE(Immideatly Invoke Function Expression)
(async() => {

})()
*/