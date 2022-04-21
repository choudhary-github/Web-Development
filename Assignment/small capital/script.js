var s = 'hello how are you'
var a = s.split('')
var text = []
function myFunction() {
    
    for (i = 0 ; i < a.length ; i ++){
    if(i % 2 == 0){
        text += (a[i].toUpperCase())
    }
    else{
        text += a[i]
    }
}return console.log(text)
}
myFunction()