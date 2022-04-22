let btnWait = document.getElementById('btnWait')
let btnCount = document.getElementById('btnCount')
let divStatus = document.getElementById('divStatus')
let divValue = document.getElementById('divValue')

btnWait.onclick = function(){
    divStatus.textContent = 'Waiting'
    console.log('waiting')
    setTimeout(() => {
        divStatus.textContent = 'Done'
    },5000)
    
}

let count = 0

btnCount.onclick = function(){
    count++
    console.log(count)
    divValue.textContent = count
}