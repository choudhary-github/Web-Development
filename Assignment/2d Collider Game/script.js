let gamebox = document.getElementById("gamebox")
let context = gamebox.getContext('2d')

let gameon = true

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
        this.speed = 0
    }
    move(){
        this.x += this.speed
        // if(this.x + this.size > 500){
        //     this.speed = -(Math.abs(this.speed))
        // }
        // if(this.x == 0){
        //     this.speed = Math.abs(this.speed)
        // }
    }
}
class Enemy extends Box{
    constructor(speed){
        super(50,'red')
        this.speed = speed
    }
    move(){
        this.y += this.speed
        if (this.y + this.size > 500){
            this.speed = -(Math.abs(this.speed))
        }
        if (this.y < 0){
            this.speed = Math.abs(this.speed)
        }
    }
}

gamebox.addEventListener('mousedown',function(){
    player.speed = 2
})
gamebox.addEventListener('mouseup',function(){
    player.speed = 0
})

let player = new Player()
let e1 = new Enemy(2)
let e2 = new Enemy(4)
let e3 = new Enemy(6)
e1.x = 100
e2.x = 233 
e3.x = 366

function drawBox(box){
    context.fillStyle = box.color
    context.fillRect(box.x,box.y,box.size,box.size)
}

function colliding(){if (
    player.x + player.size >= e1.x &&
    player.x <= e1.x + e1.size && 
    player.y + player.size >= e1.y && 
    player.y <= e1.y + e1.size || 
    player.x + player.size >= e2.x &&
    player.x <= e2.x + e2.size && 
    player.y + player.size >= e2.y && 
    player.y <= e2.y + e2.size ||
    player.x + player.size >= e3.x &&
    player.x <= e3.x + e3.size && 
    player.y + player.size >= e3.y && 
    player.y <= e3.y + e3.size
)
{
    console.log('colliding')
    gameon = false
}
}

function updateGame(){
    if(!gameon) return(window.alert('Game Over : \nPlease restart the Page'))
    context.clearRect(0,0,500,500)
    e1.move()
    e2.move()
    e3.move()
    colliding()
    player.move()
    drawBox(e1)
    drawBox(e2)
    drawBox(e3)
    drawBox(player)
    window.requestAnimationFrame(updateGame)
}
updateGame()