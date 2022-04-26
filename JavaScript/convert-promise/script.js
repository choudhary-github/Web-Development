let inpBox = document.getElementById("inpBox")
let waitBtn = document.getElementById("waitBtn")
let n = inpBox.value
function waiting(){
    let timeout = inpBox.value
    return new Promise((resolve,reject) =>{
       if(isNaN(timeout)){
           reject(new Error("Time Out should be a number"))
       }
       setTimeout(resolve,timeout)
    })
}

waitBtn.onclick = function(){
    waiting().then(()=>{
        console.log("Waiting Over")
    }).catch((err)=>{
        console.error(err)
    })
}
