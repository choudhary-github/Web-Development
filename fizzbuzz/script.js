let inputBlank = document.getElementById('inputBlank')
let btnPrint = document.getElementById('btnPrint')
let oList = document.getElementById('oList')

btnPrint.onclick = function(){
    let start = Date.now()
    var x = Number(inputBlank.value)
    for(i = 1; i <= x; i++){
        if(i % 3 == 0 && i % 5 == 0){
            oList.innerHTML += '<li>' + 'FizzBuzz' + '</li>'}
        else if(i % 3 == 0 ){
            oList.innerHTML += '<li>' + 'Fizz' + '</li>'
        }
        else if(i % 5 == 0){
            oList.innerHTML += '<li>' + 'Buzz' + '</li>'
        }
        else{
            oList.innerHTML += '<li>' + i + '</li>'
        }
    }
    console.log('time taken',Date.now()-start)
}