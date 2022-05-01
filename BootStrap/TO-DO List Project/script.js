let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')
let ulTask = $('#ulTask')

inpNewTask.keypress((e)=> {if(e.which == 13) addItem()})

function addItem(){
    if(inpNewTask.val()== '' ){
        return null
    }
    else{
        let liItem = $('<li>',{
            'class':'list-group-item',
            text:inpNewTask.val(),
        })
        liItem.click(()=>{
            liItem.toggleClass('done')
        })
        ulTask.append(liItem)
        inpNewTask.val('')
    }
    toggleInputButtons()
}

function toggleInputButtons(){
    btnAdd.prop('disabled',inpNewTask.val() == '')
    btnReset.prop('disabled',inpNewTask.val() == '')
    btnSort.prop('disabled',ulTask.children().length < 1)
    btnCleanup.prop('disabled',ulTask.children().length < 1)
}
inpNewTask.on('input',toggleInputButtons)

function sortItem(){
    $('#ulTask .done').appendTo(ulTask)
    toggleInputButtons()
}
btnAdd.click(() =>     {addItem();toggleInputButtons()})
btnReset.click(()=>     {inpNewTask.val('');toggleInputButtons()})

btnCleanup.click(()=>   {$('#ulTask .done').remove();toggleInputButtons()})

btnSort.click(sortItem)