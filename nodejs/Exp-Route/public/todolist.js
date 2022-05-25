$(()=>{
    let btnAdd = $('#btnAdd')
    let inpTask = $('#inpTask')
    let todoList = $('#todoList')

    btnAdd.click(()=>{
        let newTask = inpTask.val()
        $.post('/todos',{task: newTask},(data)=>{
            todoList.append(`<li>${newTask}</li>`)
            console.log(data)
        })
    })
})