let inputBlank = document.getElementById('inputBlank')
let btnPrint = document.getElementById('btnPrint')
let uList = document.getElementById('uList')

btnPrint.onclick = function(){
    let start = Date.now()
    var x = parseInt(inputBlank.value)
    console.log(x)
    // let uListHTML = ''
    // for(i = 1; i <= x; i++){
    //     if(i % 3 == 0 && i % 5 == 0){
    //         uListHTML += '<li>' + 'FizzBuzz' + '</li>'}
    //     else if(i % 3 == 0 ){
    //         uListHTML += '<li>' + 'Fizz' + '</li>'
    //     }
    //     else if(i % 5 == 0){
    //         uListHTML += '<li>' + 'Buzz' + '</li>'
    //     }
    //     else{
    //         uListHTML += '<li>' + i + '</li>'
    //     }
    // }
    /**
     *      Here is another way to creating with the for loop
     */
    
    for (i=1; i<=x; i++){
        /* if(i%15 == 0) */
        if(i%3 == 0 && i%5 == 0){
            let item = document.createElement('li')
            item.innerText = 'FizzBuzz'
            uList.appendChild(item)
        }
        else if(i%3==0){
            let item = document.createElement('li')
            item.innerText = 'Fizz'
            uList.appendChild(item)
        }
        else if(i%5==0){
            let item = document.createElement('li')
            item.innerText = 'Buzz'
            uList.appendChild(item)
        }
        else{
            let item = document.createElement('li')
            item.innerText = i
            uList.appendChild(item)
        }
    }

    // uList.innerHTML = uListHTML
    console.log('time taken',Date.now() - start)
}