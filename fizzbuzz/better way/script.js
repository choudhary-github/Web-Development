window.onload = () =>{
    let input = document.getElementById('input')
    let button = document.getElementById('button')
    let list = document.getElementById('list')
    

    
    button.onclick = () => {
        start = Date.now()
        list.innerHTML = ''
        let n = parseInt(input.value)

        //let c3 = 0
        //let c5 = 0

        for( i = 1; i <= n; i++){

            // c3 ++
            // c5 ++
            let li = document.createElement('li')
            let print = ''

            if (i % 3 == 0)/* if(c++ = 3) {c3 = 0; print += fizz} */ print += 'fizz'
            if (i % 5 == 0)/* if(c++ = 5) {c5 = 0; print += buzz} */ print += 'buzz'
            if (print === '') print = i

            li.textContent = print
            list.appendChild(li)
        }
        console.log('time taken', Date.now() - start);
    }   
}