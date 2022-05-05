let btnWait = document.getElementById('btnWait')
let btnCount = document.getElementById('btnCount')
let divStatus = document.getElementById('divStatus')
let divValue = document.getElementById('divValue')
let btnStop = document.getElementById('btnStop')


btnWait.onclick = function(){
    divStatus.textContent = 'Waiting'
    console.log('waiting')
    let brk = setTimeout(() => {
        divStatus.textContent = 'Done'
    },5000)
    btnStop.onclick = (()=>{
        clearTimeout(brk)
        divStatus.textContent = 'Stopped'
        console.log('Stopped')
    })
}

let count = 0

btnCount.onclick = function(){
    count++
    console.log(count)
    divValue.textContent = count
}