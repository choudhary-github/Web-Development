function hellosayer(name,time){
    let count = 0
    let loopid = setInterval(() => {
        count ++
       console.log("Hello " + name)
       if (count === time){
           clearInterval(loopid)
       }
    },5000)
}
hellosayer('Ankit',3)
hellosayer('Mousami',2)

// module.exports = {hellosayer}