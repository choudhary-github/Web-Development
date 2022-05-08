$(()=>{
    let input = $('#input')
    let list = $('#list')

    $('#prepend').click(()=>{
        let text = input.val()
        console.log(text);
        list.prepend($(`<li>${text}</li>`))
    })
    
    $('#append').click(()=>{
        let text = input.val()
        console.log(text);
        list.append($('<li>').text(text))
    })
})