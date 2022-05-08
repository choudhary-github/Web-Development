let start = document.getElementById('start')
let stp = document.getElementById('stop')
let result = document.getElementById('result')

start.onclick = ()=>{
    result.innerHTML = 'Processing'
    x = setTimeout(()=>{
        result.innerHTML = 'Done'  
    },2000)
    stp.onclick = ()=>{
        clearTimeout(x)
    }
}


