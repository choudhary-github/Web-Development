function hellosayer(name,time,doneSaying){
    let count = 0
    let loopid = setInterval(() => {
        count ++
       console.log("Hello " + name)
       if (count === time){
           clearInterval(loopid)
           doneSaying()
       }
    },1000)
}
hellosayer('Ankit', 3, () =>{
    hellosayer('Mousami', 2, () =>{
        hellosayer('Nitish', 3, () =>{

        })
    })
})