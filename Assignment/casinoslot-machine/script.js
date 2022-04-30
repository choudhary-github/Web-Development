let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let value = [
    '😒','😜','😎','🤗','🤑','😭','😡','🤩'
]


function getRandomValue(){
   return value[parseInt(Math.random()*8)]
}

let spin = setInterval(()=>{
    value1.innerText = getRandomValue()
    value2.innerText = getRandomValue()
    value3.innerText = getRandomValue()
},1000)

