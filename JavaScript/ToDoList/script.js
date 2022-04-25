window.onload = function(){
    let newTask= document.getElementById('newTask')
    let addTask= document.getElementById('addTask')
    let list= document.getElementById('list')

    addTask.onclick = function(){
        li = document.createElement('li')

        // Add the Xbutton
        let Xbutton = document.createElement('button')
        Xbutton.innerText = '❌'
        Xbutton.onclick = function(event){
            event.target.parentElement.remove()
        }

        let upBtn = document.createElement('button')
        upBtn.innerText = '⬆️'
        upBtn.onclick = function(event){

            // event.target => the up button
            // event.target.parentElement => the <li> item
            // event.target.parentElement.parentElement => is the list

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,     // insert this Element
                event.target.parentElement.previousElementSibling    // before it's previous element   
            )
        }

        let dwnBtn  = document.createElement('button')
        dwnBtn.innerText = '⬇️'
        dwnBtn.onclick = function(event){
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling,
                event.target.parentElement,
            )
        }

        // Add the task text
        let taskSpan = document.createElement('span')
        taskSpan.innerText = newTask.value

        li.appendChild(Xbutton)
        li.appendChild(upBtn)
        li.appendChild(dwnBtn)
        li.appendChild(taskSpan)
        list.appendChild(li)
    }
}