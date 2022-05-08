//   CREATING CLASS
// one way of creating object
var apple = {
    taste:"sweet",
    color:"red"
}

// this is another way to creating object

function fruit(taste,color){
    this.taste = taste,
    this.color = color
}

// using new keyword

let mango = new fruit('sweet','yellow')
let orange = new fruit('sour','orange')

// using class keyword
// class declaration
class FruitClass{
    constructor(taste,color){
        this.taste = taste
        this.color = color
    }
}

let kiwi = new FruitClass("sour","green")

// class expression



// this is not executed
let fruitClass2= class{
    constructor(taste,color){
        this.taste = "taste";
        this.color = "color";
    }
}
// 


console.log(typeof fruitClass2)

let banana = new fruitClass2("sweet","yellow")


// b = [1,2,3,4,5]

// function myFunction(){
//     let a = 50;
//     if(a==50){
//        c = 40
//        console.log(c , "inside")
//     }
//     console.log(c, "outside")
//     return c
// }
// myFunction()
// console.log(c, "global" )



// function squrt(n){
//     return Math.sqrt(n)
// }


// fruits = ["apple", "guava", "mango"]
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }


// CRETING A OBJECT
// bird = {
//     color : 'Green',
//     name : 'Parrot',
//     x : 100,
//     y : 20,
//     eggs : [1,2,3,4,5],
//     fly : function(){
//         console.log('bird is flying at ',this.x,this.y)
//     }
// }

// bird.eggs.forEach(function(val,idx){
//     console.log(idx,'---',val)
// })