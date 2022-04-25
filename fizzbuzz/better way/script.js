window.onload = () =>{
    let input = document.getElementById('input')
    let button = document.getElementById('button')
    let list = document.getElementById('list')
    

    
    button.onclick = () => {
        start = Date.now()
        list.innerHTML = ''
        let n = parseInt(input.value)
        for( i = 1; i <= n; i++){
            let li = document.createElement('li')
            let print = ''
            if (i % 3 == 0) print += 'fizz'
            if (i % 5 == 0) print += 'buzz'
            if (print === '') print = i

            li.textContent = print
            list.appendChild(li)
        }
        console.log('time taken', Date.now() - start);
    }   
}