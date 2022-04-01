function greet(name){
    console.log('Hello',name  )
}
function createGreeter(greeting){
    function greet(name){
        console.log(greeting, name)
    }
    return greet
}

function getName(){
    return document.getElementById("namebox").value
}

let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')
console.log(typeof g1())

console.log(g1)

console.log(greet('Ankit'))

console.log(g2('Ankit'))