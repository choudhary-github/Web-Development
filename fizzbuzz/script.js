let inputBlank = document.getElementById('inputBlank')
let btnPrint = document.getElementById('btnPrint')
let uList = document.getElementById('uList')

btnPrint.onclick = function(){
    let start = Date.now()
    var x = parseInt(inputBlank.value)
    for(i = 1; i <= x; i++){
        if(i % 3 == 0 && i % 5 == 0){
            uList.innerHTML += '<li>' + 'FizzBuzz' + '</li>'}
        else if(i % 3 == 0 ){
            uList.innerHTML += '<li>' + 'Fizz' + '</li>'
        }
        else if(i % 5 == 0){
            uList.innerHTML += '<li>' + 'Buzz' + '</li>'
        }
        else{
            uList.innerHTML += '<li>' + i + '</li>'
        }
    }
    console.log('time taken',Date.now() - start)
}