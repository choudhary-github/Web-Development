let gamebox = document.getElementById("gamebox")
let context = gamebox.getContext('2d')

class Box{
    constructor (size,color){
        this.size = size
        this.color = color
        this.x = 0
        this.y = 0
    }
}

class Player extends Box{
    constructor(){
        super(50,'blue')
        this.x = 0
        this.y = 225
    }
}

class Enemy extends Box{
    constructor(){
        super(50,'red')
    }
}

let player = new Player()
let e1 = new Enemy()
let e2 = new Enemy
e1.x = 120
e2.x = 320

function drawBox(box){
    context.fillStyle = box.color
    context.fillRect(box.x,box.y,box.size,box.size)
}