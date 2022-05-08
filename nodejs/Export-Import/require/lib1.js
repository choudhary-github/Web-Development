function sayHello(name){
    console.log('Hello',name);
}

// console.log(module.exports);
// for exporting
module.exports = { sayHello }

setTimeout(()=>{
    module.exports.newtxt = 'wow'
},1000)